package utils

type Response struct {
	Message string `json:"message"`
	Code    int    `json:"code"`
}

func FailedResponse(message string, code int) *Response {
	return &Response{
		Message: message,
		Code:    code,
	}
}
