package repository

import (
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
