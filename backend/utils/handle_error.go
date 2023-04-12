package utils

import (
	"fmt"

	"github.com/go-playground/validator/v10"
)

func HandleError(err error) *Response {
	var message string
	obj, ok := err.(validator.ValidationErrors)

	if ok {
		for _, v := range obj {
			switch v.Tag() {
			case "required":
				message = fmt.Sprintf("%s is required", v.Field())
			case "email":
				message = fmt.Sprintf("%s is not valid email", v.Field())
			case "min":
				message = fmt.Sprintf("%s must be at least %s characters", v.Field(), v.Param())
			case "max":
				message = fmt.Sprintf("%s must be at most %s characters", v.Field(), v.Param())
			}
		}
	}

	return FailedResponse(message, 400)
}
