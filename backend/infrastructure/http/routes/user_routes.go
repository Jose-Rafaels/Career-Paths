package routes

import (
	"career-paths/config"
	"career-paths/infrastructure/database"
	"career-paths/service"

	controller "career-paths/infrastructure/http/handler"
	repo "career-paths/repository"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

func RoutesUser(echo *echo.Echo, conf *config.AppConfig) {
	db := database.InitDB(conf)
	validate := validator.New()

	userRepository := repo.NewUserRepository(db)
	userService := service.NewUserService(userRepository, validate)
	userController := controller.NewUserController(userService)

	user := echo.Group("/v1/user")

	user.POST("/register", userController.RegisterUser)
	user.POST("/login", userController.LoginUser)
	user.GET("/verify/:email", userController.VerifyEmail)
}
