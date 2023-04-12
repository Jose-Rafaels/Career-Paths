package dto

type Register struct {
	ID              string `json:"id"`
	FirstName       string `json:"first_name" validate:"required, max=50"`
	LastName        string `json:"last_name" validate:"required, max=50"`
	Email           string `json:"email" validate:"required, email"`
	Password        string `json:"password" validate:"required, min=6, max=20"`
	ConfirmPassword string `json:"confirm_password" validate:"required, min=6, max=20"`
	RoleID          string `json:"role_id" validate:"required"`
	Active          bool   `json:"active"`

	// TimeStamps
	CreatedAt int64 `json:"created_at" bson:"created_at"`
}

type Login struct {
	Email    string `json:"email" validate:"required, email"`
	Password string `json:"password" validate:"required, min=6, max=20"`
}

type LoginResponse struct {
	AccessToken         string `json:"access_token"`
	ExpiredToken        int64  `json:"expired_access_token"`
	RefreshToken        string `json:"refresh_token"`
	ExpiredRefreshToken int64  `json:"expired_refresh_token"`
}
