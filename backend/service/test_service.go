package service

import (
	"career-paths/dto"
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

// CreateTestService implements interfaces.TestService
func (s *testService) CreateTestService(data *dto.CreateQuestion) *utils.Response {
	err := s.validate.Struct(data)
	if err != nil {
		return utils.HandleError(err)
	}
	return nil
}

// GetAllTestService implements interfaces.TestService
func (s *testService) GetAllTestService() ([]dto.FindAllQuestionResponse, *utils.Response) {
	test, _ := s.testRepository.GetAllTestRepository()

	return test, nil
}

// GetTestService implements interfaces.TestService
func (s *testService) GetTestService(id string) (*entities.Test, *utils.Response) {
	res, err := s.testRepository.GetTestRepository(id)
	if err != nil {
		return nil, utils.FailedResponse("test ID not found", 404)
	}

	return res, nil
}
