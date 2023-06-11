package handler

import (
	"career-paths/interfaces"
	"net/http"

	"github.com/labstack/echo/v4"
)

type personalityHandler struct {
	s interfaces.PersonalityService
}

func NewPersonalityHandler(s interfaces.PersonalityService) interfaces.PersonalityHandler {
	return &personalityHandler{
		s: s,
	}
}

// GetAllPersonality implements interfaces.PersonalityHandler
func (h *personalityHandler) GetAllPersonality(c echo.Context) error {
	personality, err := h.s.GetAllPersonalityService()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"code":    err.Code,
			"message": err.Message,
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"code":    http.StatusOK,
		"message": "Successfully Get All Personality data",
		"result":  personality,
	})
}
