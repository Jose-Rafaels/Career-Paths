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

func RoutesPersonality(echo *echo.Echo, conf *config.AppConfig) {
	db := database.InitDB(conf)
	validate := validator.New()

	personalityRepo := repository.NewPersonalityRepository(db)
	personalityTest := service.NewPersonalityService(personalityRepo, validate)
	personalityController := handler.NewPersonalityHandler(personalityTest)

	personality := echo.Group("/v1/personality")
	personality.GET("/all", personalityController.GetAllPersonality)
}
