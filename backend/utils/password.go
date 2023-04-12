package utils

import "golang.org/x/crypto/bcrypt"

func HashPassword(password, confirmPassword string) (string, string) {
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		panic(err)
	}

	hashConfirmPassword, err := bcrypt.GenerateFromPassword([]byte(confirmPassword), bcrypt.DefaultCost)
	if err != nil {
		panic(err)
	}

	return string(hashPassword), string(hashConfirmPassword)
}

func ComparePassword(hash, password string) error {
	return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
}
