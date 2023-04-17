package dto

type LoginAdmin struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6,max=20"`
}

type LoginAdminResponse struct {
	AccessToken         string `json:"access_token"`
	ExpiredToken        int64  `json:"expired_token"`
	RefreshToken        string `json:"refresh_token"`
	ExpiredRefreshToken int64  `json:"expired_refresh_token"`
}
