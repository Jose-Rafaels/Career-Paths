package handler

import (
	"career-paths/interfaces"
	"net/http"

	"github.com/labstack/echo/v4"
)

type TestHandler struct {
	s interfaces.TestService
}

func NewTestController(s interfaces.TestService) interfaces.TestHandler {
	return &TestHandler{
		s: s,
	}
}

func (h *TestHandler) GetAllTest(c echo.Context) error {
	test, err := h.s.GetAllTestService()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"code":    err.Code,
			"message": err.Message,
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"code":    http.StatusOK,
		"message": "Successfully Get All data Test",
		"result":  test,
	})
}
