package interfaces

import (
	"career-paths/utils"

	"github.com/labstack/echo/v4"
)

type TestRepository interface {
	CreateTestRepository() error
}

type TestService interface {
	CreateTestService() *utils.Response
}

type TestHandler interface {
	CreateTest(c echo.Context) error
}
