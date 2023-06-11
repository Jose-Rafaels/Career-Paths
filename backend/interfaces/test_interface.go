package interfaces

import (
	"career-paths/entities"
	"career-paths/utils"

	"github.com/labstack/echo/v4"
)

type TestRepository interface {
	GetAllTestRepository() ([]entities.Test, error)
}

type TestService interface {
	GetAllTestService() ([]entities.Test, *utils.Response)
}

type TestHandler interface {
	GetAllTest(c echo.Context) error
}
