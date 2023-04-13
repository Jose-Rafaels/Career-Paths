package config

import (
	"os"

	"github.com/joho/godotenv"
)

type AppConfig struct {
	App struct {
		JWT_KEY  string
		BASE_URL string
	}

	Mysql struct {
		Host string
		Port string
		Name string
		User string
		Pass string
	}

	Smtp struct {
		Host string
		Port string
		User string
		Pass string
		Name string
		Url  string
	}

	Password string
}

var appConfig *AppConfig

func NewAppConfig() *AppConfig {
	_ = godotenv.Load()
	if appConfig == nil {
		appConfig = &AppConfig{}
		appConfig.Password = os.Getenv("ADMIN_PASSWORD")

		initMysql(appConfig)
		initSmtp(appConfig)
		initApp(appConfig)
	}

	return appConfig
}
