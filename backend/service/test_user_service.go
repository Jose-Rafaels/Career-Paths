package service

import (
	"career-paths/entities"
	"career-paths/interfaces"
	"career-paths/utils"

	"github.com/go-playground/validator/v10"
	"github.com/google/uuid"
)

type testUserService struct {
	testUserRepository interfaces.TestUserRepository
	validate           *validator.Validate
}

func NewTestUserService(testUserRepository interfaces.TestUserRepository, validate *validator.Validate) interfaces.TestUserService {
	return &testUserService{
		testUserRepository: testUserRepository,
		validate:           validate,
	}
}

// CreateTestUserService implements interfaces.TestUserService
func (s *testUserService) CreateTestUserService(test *entities.TestUser) *utils.Response {
	testUser := &entities.TestUser{
		ID:                uuid.New().String(),
		NameID:            test.NameID,
		WorkPersonalityID: test.WorkPersonalityID,
	}

	err := s.testUserRepository.CreateTestUserRepository(testUser)
	if err != nil {
		return utils.FailedResponse("Failed to Create Test User", 404)
	}

	return nil
}

// GetTestUserPerIDService implements interfaces.TestUserService
func (s *testUserService) GetTestUserPerIDService(id string) (*entities.TestUser, *utils.Response) {
	test, err := s.testUserRepository.GetTestUserPerIDRepository(id)
	if err != nil {
		return nil, utils.FailedResponse("Test User Not Found", 404)
	}

	return test, nil
}
