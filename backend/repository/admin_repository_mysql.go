package repository

import (
	"career-paths/entities"
	"career-paths/interfaces"

	"gorm.io/gorm"
)

type adminRepository struct {
	DB *gorm.DB
}

func NewAdminRepository(db *gorm.DB) interfaces.AdminRepository {
	return &adminRepository{
		DB: db,
	}
}

func (r *adminRepository) LoginAdmin(email string) (*entities.Admin, error) {
	admin := &entities.Admin{}
	err := r.DB.Model(&entities.Admin{}).Preload("Role").Where("email = ?", email).First(admin).Error
	if err != nil {
		return nil, err
	}

	return admin, nil
}
