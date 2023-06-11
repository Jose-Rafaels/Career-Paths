package repository

import (
	"career-paths/entities"
	"career-paths/interfaces"

	"gorm.io/gorm"
)

type testRepository struct {
	DB *gorm.DB
}

func NewTestRepository(db *gorm.DB) interfaces.TestRepository {
	return &testRepository{
		DB: db,
	}
}

// GetAllTestRepository implements interfaces.TestRepository
func (r *testRepository) GetAllTestRepository() ([]entities.Test, error) {
	var test []entities.Test

	err := r.DB.Find(&test).Error

	if err != nil {
		return test, err
	}

	return test, nil
}
