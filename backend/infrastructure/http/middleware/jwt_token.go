package middleware

import (
	"career-paths/config"

	"github.com/golang-jwt/jwt/v4"
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

func DecodeToken(token string) (jwt.MapClaims, error) {
	claims := jwt.MapClaims{}
	_, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(""), nil
	})
	return claims, err
}
