package interfaces

import (
	"career-paths/entities"
	"career-paths/utils"

	"github.com/labstack/echo/v4"
)

type PersonalityRepository interface {
	GetAllPersonalityRepository() ([]entities.Personality, error)
}

type PersonalityService interface {
	GetAllPersonalityService() ([]entities.Personality, *utils.Response)
}

type PersonalityHandler interface {
	GetAllPersonality(c echo.Context) error
}
