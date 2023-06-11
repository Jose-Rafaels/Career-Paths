package routes

import (
	"career-paths/config"

	"github.com/labstack/echo/v4"
)

func RootRoutes(echo *echo.Echo, conf *config.AppConfig) {
	RoutesUser(echo, conf)
	RoutesAdmin(echo, conf)
	RoutesTest(echo, conf)
	RoutesPersonality(echo, conf)
	RoutesTestUser(echo, conf)
}
