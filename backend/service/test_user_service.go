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
		ID:     uuid.New().String(),
		NameID: test.NameID,
		TestResult: test.TestResult,
	}

	err := s.testUserRepository.CreateTestUserRepository(testUser)
	if err != nil {
		return utils.FailedResponse(err.Error(), 500)
	}

	return nil
}

// GetTestUserPerIDService implements interfaces.TestUserService
func (s *testUserService) GetTestUserPerIDService(id string) (*entities.TestUser, *utils.Response) {
	testUser, err := s.testUserRepository.GetTestUserPerIDRepository(id)
	if err != nil {
		return nil, utils.FailedResponse(err.Error(), 404)
	}

	return testUser, nil
}

// GetAllTestUsersService implements interfaces.TestUserService
func (s *testUserService) GetAllTestUsersService() ([]*entities.TestUser, *utils.Response) {
    testUsers, err := s.testUserRepository.GetAllTestUsersRepository()
    if err != nil {
        return nil, utils.FailedResponse(err.Error(), 500)
    }

    for _, testUser := range testUsers {
        if testUser.User.ID == testUser.NameID {
            testUser.FirstName = testUser.User.FirstName
            testUser.LastName = testUser.User.LastName
        }
    }

    return testUsers, nil
}