package service

import (
	"career-paths/entities"
	"career-paths/interfaces"
	"career-paths/utils"

	"github.com/go-playground/validator/v10"
)

type personalityService struct {
	personalityRepository interfaces.PersonalityRepository
	validate              *validator.Validate
}

func NewPersonalityService(personalityRepository interfaces.PersonalityRepository, validate *validator.Validate) interfaces.PersonalityService {
	return &personalityService{
		personalityRepository: personalityRepository,
		validate:              validate,
	}
}

// GetAllPersonalityService implements interfaces.PersonalityService
func (s *personalityService) GetAllPersonalityService() ([]entities.Personality, *utils.Response) {
	personality, _ := s.personalityRepository.GetAllPersonalityRepository()

	return personality, nil
}
