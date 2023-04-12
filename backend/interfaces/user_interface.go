package interfaces

import (
	"career-paths/dto"
	"career-paths/entities"
	"career-paths/utils"

	"github.com/labstack/echo/v4"
)

type UserRepository interface {
	RegisterUserRepository(user *dto.Register) error
	LoginUserRepository(email string) (*entities.User, error)
	VerifyEmail(email string) error
}

type UserService interface {
	RegisterUserService(data *dto.Register) *utils.Response
	LoginUserService(data *dto.Login) (*dto.LoginResponse, *utils.Response)
	VerifyEmail(email string, token string, expires string) *utils.Response
}

type UserHandler interface {
	RegisterUser(c echo.Context) error
	LoginUser(c echo.Context) error
	VerifyEmail(c echo.Context) error
}
