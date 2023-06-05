package service

import (
	"career-paths/interfaces"

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
