package config

import "os"

func initApp(conf *AppConfig) {
	jwt_key := os.Getenv("JWT_KEY")
	base_urls := os.Getenv("BASE_URL")

	conf.App.JWT_KEY = jwt_key
	conf.App.BASE_URL = base_urls
}
