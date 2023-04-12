package server

import (
	"career-paths/infrastructure/database"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func Server() *echo.Echo {
	app := echo.New()
	conf := database.Config{}

	app.Use(middleware.CORS())
	app.Use(middleware.Recover())
	app.Use(middleware.Logger())

	app.GET("/", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]interface{}{
			"Body":    "Selamat Datang di api Backend Career-Paths Version 1.0",
			"Creator": "Saut Kristian Wiratama Manurung",
			"Status":  true,
		})
	})

	return app
}
