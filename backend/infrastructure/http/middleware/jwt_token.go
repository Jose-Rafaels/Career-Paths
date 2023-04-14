package middleware

import (
	"career-paths/config"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func JWTTokenMiddlewareFromAccessToken() echo.MiddlewareFunc {
	secret := config.NewAppConfig().App
	return middleware.JWTWithConfig(middleware.JWTConfig{
		SigningKey:    []byte(secret.JWT_KEY),
		SigningMethod: "HS256",
		TokenLookup:   "cookie:access_token",
	})
}

func JWTTokenMiddlewareFromRefreshToken() echo.MiddlewareFunc {
	secret := config.NewAppConfig().App
	return middleware.JWTWithConfig(middleware.JWTConfig{
		SigningKey:    []byte(secret.JWT_KEY),
		SigningMethod: "HS256",
		TokenLookup:   "cookie:refresh_token",
	})
}
