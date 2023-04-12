package config

import "os"

func initMysql(conf *AppConfig) {
	DB_USERNAME := os.Getenv("DB_USERNAME")
	DB_PASSWORD := os.Getenv("DB_PASSWORD")
	DB_NAME := os.Getenv("DB_NAME")
	DB_PORT := os.Getenv("DB_PORT")
	DB_HOST := os.Getenv("DB_HOST")

	conf.Mysql.Host = DB_HOST
	conf.Mysql.Name = DB_NAME
	conf.Mysql.Pass = DB_PASSWORD
	conf.Mysql.Port = DB_PORT
	conf.Mysql.User = DB_USERNAME
}
