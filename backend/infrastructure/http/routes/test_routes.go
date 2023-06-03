package routes

import (
	"career-paths/config"

	"github.com/labstack/echo/v4"
)

func RoutesTest(echo *echo.Echo, conf *config.AppConfig) {
	// db := database.InitDB(conf)
	// validate := validator.New()

	// testRepo := repository.NewTestRepository(db)
	// testService := service.NewTestService(testRepo, validate)
	// testController := handler.NewTestController(testService)

	// test := echo.Group("/v1/test")
	// test.POST("/create", testController.CreateTest)
	// test.GET("/all", testController.GetAllTest)
	// test.GET("/:id", testController.GetTest)
}
