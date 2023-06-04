package handler

import (
	"career-paths/interfaces"
)

type TestHandler struct {
	s interfaces.TestService
}

func NewTestController(s interfaces.TestService) interfaces.TestHandler {
	return &TestHandler{
		s: s,
	}
}

// // CreateTest implements interfaces.TestHandler
// func (h *TestHandler) CreateTest(c echo.Context) error {
// 	tests := &dto.CreateQuestion{}

// 	if err := c.Bind(&tests); err != nil {
// 		return c.JSON(http.StatusBadRequest, map[string]interface{}{
// 			"message": err.Error(),
// 			"status":  false,
// 			"code":    http.StatusBadRequest,
// 		})
// 	}

// 	res := h.s.CreateTestService(tests)

// 	return c.JSON(http.StatusCreated, map[string]interface{}{
// 		"code":    http.StatusCreated,
// 		"message": "Successfully Create Test",
// 		"result":  res,
// 	})
// }

// // GetAllTest implements interfaces.TestHandler
// func (h *TestHandler) GetAllTest(c echo.Context) error {
// 	test, err := h.s.GetAllTestService()
// 	if err != nil {
// 		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
// 			"code":    err.Code,
// 			"message": err.Message,
// 		})
// 	}

// 	return c.JSON(http.StatusOK, map[string]interface{}{
// 		"code":    http.StatusOK,
// 		"message": "Successfully Get All data Test",
// 		"result":  test,
// 	})
// }

// // GetTest implements interfaces.TestHandler
// func (h *TestHandler) GetTest(c echo.Context) error {
// 	id := c.Param("id")

// 	tests, err := h.s.GetTestService(id)

// 	if err != nil {
// 		return c.JSON(http.StatusBadRequest, map[string]interface{}{
// 			"code":    err.Code,
// 			"message": err.Message,
// 		})
// 	}

// 	return c.JSON(http.StatusOK, map[string]interface{}{
// 		"code":    http.StatusOK,
// 		"message": "Successfully get test from ID",
// 		"result":  tests,
// 	})
// }
