package service

import (
	"career-paths/dto"
	"career-paths/interfaces"
	"career-paths/utils"

	"github.com/go-playground/validator/v10"
)

type adminService struct {
	adminRepository interfaces.AdminRepository
	Validate        *validator.Validate
}

func NewAdminService(adminRepository interfaces.AdminRepository, validate *validator.Validate) interfaces.AdminService {
	return &adminService{
		adminRepository: adminRepository,
		Validate:        validate,
	}
}

// LoginAdmin implements interfaces.AdminService
func (s *adminService) LoginAdmin(data *dto.LoginAdmin) (*dto.LoginAdminResponse, *utils.Response) {
	err := s.Validate.Struct(data)
	if err != nil {
		return nil, utils.HandleError(err)
	}

	res, err := s.adminRepository.LoginAdmin(data.Email)
	if err != nil {
		return nil, utils.FailedResponse("email is not registered", 404)
	}

	err = utils.ComparePassword(res.Password, data.Password)
	if err != nil {
		return nil, utils.FailedResponse("password is wrong", 400)
	}

	accessToken, expiredAccessToken, err := utils.GenerateAccessToken(res.ID, res.Email, res.Role.Name)
	if err != nil {
		return nil, utils.FailedResponse(err.Error(), 400)
	}

	refreshToken, expiredRefreshToken, err := utils.GenerateRefreshToken(res.ID, res.Email, res.Role.Name)
	if err != nil {
		return nil, utils.FailedResponse(err.Error(), 400)
	}

	token := &dto.LoginAdminResponse{
		AccessToken:         accessToken,
		ExpiredToken:        expiredAccessToken,
		RefreshToken:        refreshToken,
		ExpiredRefreshToken: expiredRefreshToken,
	}

	return token, nil
}
