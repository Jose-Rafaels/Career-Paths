package seeds

import (
	"career-paths/config"
	"career-paths/entities"

	"gorm.io/gorm"
)

func adminSeeder(db *gorm.DB) Seed {
	secret := config.NewAppConfig()
	seeds := []entities.Admin{
		{
			ID:        AdminRoleID,
			FirstName: "User",
			LastName:  "Root 1",
			Email:     "adminuser@gmail.com",
			Password:  secret.Password,
		},
		{
			ID:        AdminRoleID,
			FirstName: "User",
			LastName:  "Root 2",
			Email:     "adminuser2@gmail.com",
			Password:  secret.Password,
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
