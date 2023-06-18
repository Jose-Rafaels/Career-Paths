package repository

import (
	"career-paths/entities"
	"career-paths/interfaces"
	"errors"
	"gorm.io/gorm"
)

type testUserRepository struct {
	DB *gorm.DB
}

func NewTestUserRepository(db *gorm.DB) interfaces.TestUserRepository {
	return &testUserRepository{
		DB: db,
	}
}

// CreateTestUserRepository implements interfaces.TestUserRepository
func (r *testUserRepository) CreateTestUserRepository(test *entities.TestUser) error {
	testUser := &entities.TestUser{
		ID:     test.ID,
		NameID: test.NameID,
		TestResult: test.TestResult,
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
    err := r.DB.Model(&entities.TestUser{}).Where("id = ?", id).First(testUser).Error
    if err != nil {
        return nil, err
    }

    return testUser, nil
}

// GetAllTestUsersRepository implements interfaces.TestUserRepository
func (r *testUserRepository) GetAllTestUsersRepository() ([]*entities.TestUser, error) {
	testUsers := []*entities.TestUser{}
	err := r.DB.
		Model(&entities.TestUser{}).
		Preload("User").
		Find(&testUsers).
		Error
	if err != nil {
		return nil, err
	}

	for _, testUser := range testUsers {
		if testUser.User.ID == testUser.NameID {
			testUser.FirstName = testUser.User.FirstName
			testUser.LastName = testUser.User.LastName
			testUser.Email = testUser.User.Email
		}
	}

	return testUsers, nil
}
