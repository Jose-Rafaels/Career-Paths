package handler

import (
	"career-paths/entities"
	"career-paths/interfaces"
	"net/http"

	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
)

type testUserHandler struct {
	s interfaces.TestUserService
}

func NewTestUserController(testUserService interfaces.TestUserService) interfaces.TestUserHandler {
	return &testUserHandler{
		s: testUserService,
	}
}

// CreateTestUser implements interfaces.TestUserHandler
func (h *testUserHandler) CreateTestUser(c echo.Context) error {
	testUser := &entities.TestUser{
		ID: uuid.New().String(),
	}
	if err := c.Bind(&testUser); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]interface{}{
			"message": err.Error(),
			"status":  false,
			"code":    http.StatusBadRequest,
		})
	}

	fail := h.s.CreateTestUserService(testUser)
	if fail != nil {
		return c.JSON(fail.Code, map[string]interface{}{
			"message": fail.Message,
			"status":  false,
			"code":    fail.Code,
		})
	}

	return c.JSON(http.StatusCreated, map[string]interface{}{
		"code":    http.StatusCreated,
		"message": "Create Test User Successfully!!!!",
	})
}

// GetTestUserPerID implements interfaces.TestUserHandler
func (h *testUserHandler) GetTestUserPerID(c echo.Context) error {
	id := c.Param("id")

	testUser, err := h.s.GetTestUserPerIDService(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]interface{}{
			"code":    err.Code,
			"message": err.Message,
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"code":    http.StatusOK,
		"message": "Successfully get test User by ID",
		"result":  testUser,
	})
}
