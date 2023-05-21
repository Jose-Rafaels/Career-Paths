package seeds

import (
	"career-paths/config"
	"career-paths/dto"
	"career-paths/entities"
	"career-paths/utils"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func adminSeeder(db *gorm.DB) Seed {
	secret := config.NewAppConfig()
	dtos := dto.Register{}
	password := dtos.Password
	confirm := dtos.ConfirmPassword
	password = secret.Password
	confirm = secret.Password
	passwordReal, _ := utils.HashPassword(password, confirm)
	seeds := []entities.Admin{
		{
			ID:        uuid.New().String(),
			FirstName: "User",
			LastName:  "Root 1",
			Email:     "adminuser@gmail.com",
			Password:  passwordReal,
			RoleID:    AdminRoleID,
			Role:      entities.Role{},
			CreatedAt: 0,
			UpdatedAt: 0,
			DeletedAt: 0,
		},
		{
			ID:        uuid.New().String(),
			FirstName: "User",
			LastName:  "Root 2",
			Email:     "adminuser2@gmail.com",
			Password:  passwordReal,
			RoleID:    AdminRoleID,
			CreatedAt: 0,
			UpdatedAt: 0,
			DeletedAt: 0,
		},
	}

	model := &entities.Admin{}

	return Seed{
		entity: model,
		run: func(db *gorm.DB) (err error) {
			for _, v := range seeds {
				err = db.Create(&v).Error
			}
			return err
		},
	}
}
