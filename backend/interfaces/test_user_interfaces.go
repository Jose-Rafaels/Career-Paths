package interfaces

import (
	"career-paths/entities"
	"career-paths/utils"

	"github.com/labstack/echo/v4"
)

type TestUserRepository interface {
	CreateTestUserRepository(test *entities.TestUser) error
	GetTestUserPerIDRepository(id string) (*entities.TestUser, error)
}

type TestUserService interface {
	CreateTestUserService(test *entities.TestUser) *utils.Response
	GetTestUserPerIDService(id string) (*entities.TestUser, *utils.Response)
}

type TestUserHandler interface {
	CreateTestUser(c echo.Context) error
	GetTestUserPerID(c echo.Context) error
}
