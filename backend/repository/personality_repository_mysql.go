package repository

import (
	"career-paths/entities"
	"career-paths/interfaces"

	"gorm.io/gorm"
)

type personalityRepository struct {
	DB *gorm.DB
}

func NewPersonalityRepository(db *gorm.DB) interfaces.PersonalityRepository {
	return &personalityRepository{
		DB: db,
	}
}

// GetAllPersonalityRepository implements interfaces.PersonalityRepository
func (r *personalityRepository) GetAllPersonalityRepository() ([]entities.Personality, error) {
	var personality []entities.Personality

	err := r.DB.Find(&personality).Error

	if err != nil {
		return personality, err
	}

	return personality, nil
}
