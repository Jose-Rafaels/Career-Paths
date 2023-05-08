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

func RoutesAdmin(echo *echo.Echo, conf *config.AppConfig) {
	db := database.InitDB(conf)
	validate := validator.New()

	adminRepository := repository.NewAdminRepository(db)
	adminService := service.NewAdminService(adminRepository, validate)
	adminController := handler.NewAdminController(adminService)

	admin := echo.Group("/v1/admin")
	admin.POST("/login", adminController.LoginAdmin)
}
