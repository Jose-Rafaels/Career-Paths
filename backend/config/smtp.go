package config

import "os"

func initSmtp(conf *AppConfig) {
	host := os.Getenv("SMTP_HOST")
	port := os.Getenv("SMTP_PORT")
	user := os.Getenv("SMTP_USER")
	pass := os.Getenv("SMTP_PASS")
	url := os.Getenv("SMTP_URL")

	conf.Smtp.Host = host
	conf.Smtp.Port = port
	conf.Smtp.User = user
	conf.Smtp.Pass = pass
	conf.Smtp.Url = url
}
