package repository

import (
	"career-paths/dto"
	"career-paths/entities"
	"career-paths/interfaces"
	"errors"
	"time"

	"github.com/google/uuid"
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

// CreateTestRepository implements interfaces.TestRepository
func (repo *testRepository) CreateTestRepository(test *dto.CreateQuestion) error {
	tests := &entities.Test{
		ID:        uuid.New().String(),
		Question:  test.Question,
		Answare1:  test.Answare1,
		Answare2:  test.Answare2,
		Type1:     test.Type1,
		Type2:     test.Type2,
		CreatedAt: time.Now().Unix(),
	}

	err := repo.DB.Model(&entities.Test{}).Create(tests).Error
	if err != nil {
		return errors.New("failed to create test")
	}

	return nil
}

// GetAllTestRepository implements interfaces.TestRepository
func (repo *testRepository) GetAllTestRepository() ([]dto.FindAllQuestionResponse, error) {
	var test []dto.FindAllQuestionResponse
	err := repo.DB.Model(&entities.Test{}).Find(&test).Error
	if err != nil {
		return nil, err
	}
	return test, nil
}

// GetTestRepository implements interfaces.TestRepository
func (repo *testRepository) GetTestRepository(id string) (*entities.Test, error) {
	var test entities.Test
	err := repo.DB.Model(&test).Where("id = ?", id).First(&test).Error
	if err != nil {
		return nil, err
	}

	return &test, nil
}
