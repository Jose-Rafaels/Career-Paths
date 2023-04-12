package seeds

import (
	"career-paths/entities"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

var (
	AdminRoleID = uuid.New().String()
	UserRoleID  = uuid.New().String()
)

func roleSeeder(db *gorm.DB) Seed {
	seeds := []entities.Role{
		{
			ID:   AdminRoleID,
			Name: "admin",
		},
		{
			ID:   UserRoleID,
			Name: "user",
		},
	}

	model := &entities.Role{}

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
