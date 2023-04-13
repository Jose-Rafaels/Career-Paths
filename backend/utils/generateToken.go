package utils

import (
	"career-paths/config"

	"github.com/golang-jwt/jwt/v4"
)

func GenerateAccessToken(id, email, roleName string) (string, int64, error) {
	conf := config.NewAppConfig().App
	secret := conf.JWT_KEY
	expired := 7200

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":        id,
		"email":     email,
		"role_name": roleName,
		"exp":       expired,
	})

	tokenString, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", 0, err
	}

	return tokenString, int64(expired), nil
}

func GenerateRefreshToken(id, email, roleName string) (string, int64, error) {
	conf := config.NewAppConfig().App
	secret := conf.JWT_KEY
	expired := 604800

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":        id,
		"email":     email,
		"role_name": roleName,
		"exp":       expired,
	})

	tokenString, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", 0, err
	}

	return tokenString, int64(expired), nil
}
