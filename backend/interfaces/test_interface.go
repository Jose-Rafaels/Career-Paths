package interfaces

import (
	"career-paths/dto"
	"career-paths/entities"
	"career-paths/utils"

	"github.com/labstack/echo/v4"
)

type TestRepository interface {
	CreateTestRepository(test *dto.CreateQuestion) error
	GetTestRepository(id string) (*entities.Test, error)
	GetAllTestRepository() ([]dto.FindAllQuestionResponse, error)
}

type TestService interface {
	CreateTestService(data *dto.CreateQuestion) *utils.Response
	GetTestService(id string) (*entities.Test, *utils.Response)
	GetAllTestService() ([]dto.FindAllQuestionResponse, *utils.Response)
}

type TestHandler interface {
	CreateTest(c echo.Context) error
	GetTest(c echo.Context) error
	GetAllTest(c echo.Context) error
}
