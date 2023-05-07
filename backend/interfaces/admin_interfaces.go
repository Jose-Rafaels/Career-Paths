package interfaces

import (
	"career-paths/dto"
	"career-paths/entities"
	"career-paths/utils"

	"github.com/labstack/echo/v4"
)

type AdminRepository interface {
	LoginAdmin(email string) (*entities.Admin, error)
}

type AdminService interface {
	LoginAdmin(data *dto.LoginAdmin) (*dto.LoginAdminResponse, *utils.Response)
}

type AdminHandler interface {
	LoginAdmin(c echo.Context) error
}
