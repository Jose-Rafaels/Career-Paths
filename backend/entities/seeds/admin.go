package seeds

import (
	"career-paths/config"
	"career-paths/entities"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func adminSeeder(db *gorm.DB) Seed {
	secret := config.NewAppConfig()
	seeds := []entities.Admin{
		{
			ID:        uuid.New().String(),
			FirstName: "User",
			LastName:  "Root 1",
			Email:     "adminuser@gmail.com",
			Password:  secret.Password,
			RoleID:    AdminRoleID,
		},
		{
			ID:        uuid.New().String(),
			FirstName: "User",
			LastName:  "Root 2",
			Email:     "adminuser2@gmail.com",
			Password:  secret.Password,
			RoleID:    AdminRoleID,
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
