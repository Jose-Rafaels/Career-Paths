package service

import (
	"career-paths/dto"
	"career-paths/interfaces"
	"career-paths/utils"
	"sync"
	"time"

	"github.com/go-playground/validator/v10"
)

type service struct {
	userRepository interfaces.UserRepository
	Validate       *validator.Validate
}

func NewUserService(userRepository interfaces.UserRepository, validate *validator.Validate) interfaces.UserService {
	return &service{
		userRepository: userRepository,
		Validate:       validate,
	}
}

func (s *service) RegisterUserService(data *dto.Register) *utils.Response {
	err := s.Validate.Struct(data)
	if err != nil {
		return utils.HandleError(err)
	}

	hashPassword, confirmHashPassword := utils.HashPassword(data.Password, data.ConfirmPassword)
	data.Password = hashPassword
	data.ConfirmPassword = confirmHashPassword

	err = s.userRepository.RegisterUserRepository(data)
	if err != nil {
		return utils.FailedResponse(err.Error(), 400)
	}

	chError := make(chan error, 1)
	wg := sync.WaitGroup{}
	wg.Add(1)

	go func() {
		defer wg.Done()
		err := utils.SendEmail(data.Email)
		if err != nil {
			chError <- err
		}
	}()

	wg.Wait()
	close(chError)

	err = <-chError
	if err != nil {
		return utils.FailedResponse(err.Error(), 400)
	}

	return nil
}

func (s *service) LoginUserService(data *dto.Login) (*dto.LoginResponse, *utils.Response) {
	err := s.Validate.Struct(data)
	if err != nil {
		return nil, utils.HandleError(err)
	}

	res, err := s.userRepository.LoginUserRepository(data.Email)
	if err != nil {
		return nil, utils.FailedResponse("email is not registered", 404)
	}

	err = utils.ComparePassword(res.Password, data.Password)
	if err != nil {
		return nil, utils.FailedResponse("password is wrong", 400)
	}

	accessToken, expiredAccessToken, err := utils.GenerateRefreshToken(res.ID, res.Email, res.Role.Name)
	if err != nil {
		return nil, utils.FailedResponse(err.Error(), 400)
	}

	refreshToken, expiredRefreshToken, err := utils.GenerateRefreshToken(res.ID, res.Email, res.Role.Name)
	if err != nil {
		return nil, utils.FailedResponse(err.Error(), 400)
	}

	token := &dto.LoginResponse{
		AccessToken:         accessToken,
		ExpiredToken:        expiredAccessToken,
		RefreshToken:        refreshToken,
		ExpiredRefreshToken: expiredRefreshToken,
	}

	return token, nil
}

func (s *service) VerifyEmail(email string, token string, expires string) *utils.Response {
	_, tokenExpiration, err := utils.GenerateVerificationToken()
	if err != nil {
		return utils.FailedResponse(err.Error(), 400)
	}

	expirationTime := time.Now().Add(-5 * time.Minute).Unix()
	// expirationsTime := expirationTime.Unix()
	if tokenExpiration-expirationTime == 1 {
		return utils.FailedResponse("token is expired", 400)
	}

	err = s.userRepository.VerifyEmail(email)
	if err != nil {
		return utils.FailedResponse("email is not registered", 404)
	}

	return nil
}
