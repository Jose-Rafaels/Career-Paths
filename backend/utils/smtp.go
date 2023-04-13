package utils

import (
	"career-paths/config"
	"fmt"
	"net/smtp"
)

type loginAuth struct {
	username, password string
}

func (l *loginAuth) Start(server *smtp.ServerInfo) (string, []byte, error) {
	auth := smtp.PlainAuth("", l.username, l.password, server.Name)
	return auth.Start(server)
}

func (l *loginAuth) Next(fromServer []byte, more bool) ([]byte, error) {
	return nil, nil
}

func loginsAuth(username, password string) smtp.Auth {
	return &loginAuth{username, password}
}

func SendEmail(email string) error {
	conf := config.NewAppConfig()
	host := conf.Smtp.Host
	port := 587
	password := conf.Smtp.Pass
	username := conf.Smtp.User
	from := "noreply@lapor-mas.id"
	url := conf.Smtp.Url

	token, expires, err := GenerateVerificationToken()
	if err != nil {
		fmt.Println("This is the errors : ", err)
	}
	addr := fmt.Sprintf("%v:%v", host, port)
	verificationLink := fmt.Sprintf("%s/verify/%s?token=%s&expires=%s", url, email, token, expires)
	subject := "Careers Path - Verify Email"
	body := fmt.Sprintf("Hi, please click this link to verify your email: %s", verificationLink)

	message := []byte("From: " + from + "\n" + "To: " + email + "\n" + "Subject: " + subject + "\n\n" + body + "\r\n")

	auth := loginsAuth(username, password)

	to := []string{email}

	errs := smtp.SendMail(addr, auth, from, to, message)

	if errs != nil {
		return errs
	}

	return nil
}
