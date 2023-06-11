package repository

import (
	"career-paths/entities"
	"career-paths/interfaces"
	"errors"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type testUserRepository struct {
	DB *gorm.DB
}

func NewTestUserRepositorY(db *gorm.DB) interfaces.TestUserRepository {
	return &testUserRepository{
		DB: db,
	}
}

// CreateTestUserRepository implements interfaces.TestUserRepository
func (r *testUserRepository) CreateTestUserRepository(test *entities.TestUser) error {
	testUser := &entities.TestUser{
		ID:                uuid.New().String(),
		NameID:            test.NameID,
		WorkPersonalityID: test.WorkPersonalityID,
	}

	err := r.DB.Model(&entities.TestUser{}).Create(testUser).Error
	if err != nil {
		return errors.New("failed to create test user")
	}
	return nil
}

// GetTestUserPerIDRepository implements interfaces.TestUserRepository
func (r *testUserRepository) GetTestUserPerIDRepository(id string) (*entities.TestUser, error) {
	testUser := &entities.TestUser{}
	err := r.DB.Model(&entities.TestUser{}).Preload("User").Preload("WorkPersonality").Where("id = ?", id).First(testUser).Error
	if err != nil {
		return nil, err
	}

	return testUser, nil
}
