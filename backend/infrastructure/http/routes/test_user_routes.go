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

func RoutesTestUser(echo *echo.Echo, conf *config.AppConfig) {
	db := database.InitDB(conf)
	validate := validator.New()

	testUserRepo := repository.NewTestUserRepository(db)
	testUserService := service.NewTestUserService(testUserRepo, validate)
	testUserController := handler.NewTestUserController(testUserService)

	testUser := echo.Group("/v1/test-user")
	testUser.POST("/create", testUserController.CreateTestUser)
	testUser.GET("/:id", testUserController.GetTestUserPerID)
	testUser.GET("/all-result", testUserController.GetAllTestUsers)
}
