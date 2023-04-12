package interfaces

import "github.com/labstack/echo/v4"

type UserRepository interface {
	RegisterUserRepository()
}

type UserService interface {
	RegisterUserService()
}

type UserHandler interface {
	RegisterUser(c *echo.Context) error
}
