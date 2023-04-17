package utils

import (
	"crypto/rand"
	"fmt"
	"time"
)

func GenerateVerificationToken() (string, time.Time, error) {
	expirateTime := time.Now().Add(5 * time.Minute)
	token := make([]byte, 16)
	_, err := rand.Read(token)
	if err != nil {
		return "", time.Time{}, err
	}
	return fmt.Sprintf("%x", token), expirateTime, nil
}
