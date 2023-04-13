package main

import (
	"career-paths/infrastructure/http/server"
	"fmt"
)

func main() {
	app := server.Server()
	err := app.Start(":8080")
	if err != nil {
		fmt.Println("This is the errors: ", err)
	}
}
