package handler

import (
	"career-paths/dto"
	"career-paths/interfaces"
	"net/http"

	"github.com/labstack/echo/v4"
)

type adminHandler struct {
	s interfaces.AdminService
}

func NewAdminController(adminService interfaces.AdminService) interfaces.AdminHandler {
	return &adminHandler{
		s: adminService,
	}
}

// LoginAdmin implements interfaces.AdminHandler
func (h *adminHandler) LoginAdmin(c echo.Context) error {
	admin := &dto.LoginAdmin{}
	if err := c.Bind(&admin); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]interface{}{
			"message": err.Error(),
			"status":  false,
			"code":    http.StatusBadRequest,
		})
	}

	res, fail := h.s.LoginAdmin(admin)
	if fail != nil {
		return c.JSON(fail.Code, map[string]interface{}{
			"message": fail.Message,
			"status":  false,
			"code":    fail.Code,
		})
	}

	cookiesAccessToken := &http.Cookie{}
	cookiesAccessToken.Name = "access_token"
	cookiesAccessToken.Value = res.AccessToken
	cookiesAccessToken.MaxAge = int(res.ExpiredToken)
	cookiesAccessToken.HttpOnly = true
	cookiesAccessToken.Secure = true
	cookiesAccessToken.Domain = "localhost"
	cookiesAccessToken.SameSite = http.SameSiteLaxMode

	cookiesRefreshToken := &http.Cookie{}
	cookiesRefreshToken.Name = "refresh_token"
	cookiesRefreshToken.Value = res.RefreshToken
	cookiesRefreshToken.MaxAge = int(res.ExpiredRefreshToken)
	cookiesRefreshToken.HttpOnly = true
	cookiesRefreshToken.Secure = true
	cookiesRefreshToken.Domain = "localhost"
	cookiesRefreshToken.SameSite = http.SameSiteLaxMode

	c.SetCookie(cookiesAccessToken)
	c.SetCookie(cookiesRefreshToken)

	return c.JSON(http.StatusOK, map[string]interface{}{
		"code":    http.StatusOK,
		"message": "login successfully",
		"result":  res,
	})
}
