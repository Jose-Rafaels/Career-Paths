package database

import (
	"career-paths/config"
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func InitDB(conf *config.AppConfig) *gorm.DB {
	host := conf.Mysql.Host
	port := conf.Mysql.Port
	name := conf.Mysql.Name
	user := conf.Mysql.User
	pass := conf.Mysql.Pass
	connectionString := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local",
		user,
		pass,
		host,
		port,
		name,
	)

	DB, err := gorm.Open(mysql.Open(connectionString), &gorm.Config{})

	if err != nil {
		fmt.Println("This is the error : ", err)
	}

	e := DB.AutoMigrate()

	if e != nil {
		fmt.Println("This is the error : ", e)
	}

	return DB
}
