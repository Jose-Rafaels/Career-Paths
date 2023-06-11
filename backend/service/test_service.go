package service

import (
	"career-paths/entities"
	"career-paths/interfaces"
	"career-paths/utils"

	"github.com/go-playground/validator/v10"
)

type testService struct {
	testRepository interfaces.TestRepository
	validate       *validator.Validate
}

func NewTestService(testRepository interfaces.TestRepository, validate *validator.Validate) interfaces.TestService {
	return &testService{
		testRepository: testRepository,
		validate:       validate,
	}
}

// GetAllTestService implements interfaces.TestService
func (s *testService) GetAllTestService() ([]entities.Test, *utils.Response) {
	test, _ := s.testRepository.GetAllTestRepository()

	return test, nil
}
