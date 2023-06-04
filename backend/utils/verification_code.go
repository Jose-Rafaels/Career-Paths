package utils

import (
	"crypto/rand"
	"fmt"
	"time"
)

func GenerateVerificationToken() (string, int64, error) {
	expirateTime := time.Now().Add(5 * time.Minute).Unix()
	token := make([]byte, 16)
	_, err := rand.Read(token)
	if err != nil {
		return "", 0, err
	}

	return fmt.Sprintf("%x", token), expirateTime, nil
}
