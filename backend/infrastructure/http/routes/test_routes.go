package routes

import (
	"career-paths/config"
	"career-paths/infrastructure/database"
	"career-paths/infrastructure/http/handler"
	"career-paths/repository"
	"career-paths/service"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

func RoutesTest(echo *echo.Echo, conf *config.AppConfig) {
	db := database.InitDB(conf)
	validate := validator.New()

	testRepo := repository.NewTestRepository(db)
	testService := service.NewTestService(testRepo, validate)
	testController := handler.NewTestController(testService)

	test := echo.Group("/v1/test")
	test.GET("/all", testController.GetAllTest)
}
