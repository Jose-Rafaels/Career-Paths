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

type userRepository struct {
	DB *gorm.DB
}

func NewUserRepository(db *gorm.DB) interfaces.UserRepository {
	return &userRepository{
		DB: db,
	}
}

func (repo *userRepository) LoginUserRepository(email string) (*entities.User, error) {
	user := &entities.User{}
	err := repo.DB.Model(&entities.User{}).Preload("Role").Where("email = ?", email).First(user).Error
	if err != nil {
		return nil, err
	}

	return user, nil
}

func (repo *userRepository) RegisterUserRepository(data *dto.Register) error {
	user := &entities.User{
		ID:              uuid.New().String(),
		FirstName:       data.FirstName,
		LastName:        data.LastName,
		Password:        data.Password,
		ConfirmPassword: data.ConfirmPassword,
		Email:           data.Email,
		RoleID:          data.RoleID,
		IsActivated:     false,
		CreatedAt:       time.Now().Unix(),
	}
	err := repo.DB.Model(&entities.User{}).Create(user).Error
	if err != nil {
		return errors.New("failed to register user")
	}
	return nil
}

func (repo *userRepository) VerifyEmail(email string) error {
	user := &entities.User{}

	err := repo.DB.Model(user).Where("email = ?", email).Update("is_activated", true).Error
	if err != nil {
		return errors.New("failed to verify email")
	}

	return nil
}
