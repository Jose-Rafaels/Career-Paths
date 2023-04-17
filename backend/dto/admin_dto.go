package dto

type LoginAdmin struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6,max=20"`
}

type LoginAdminResponse struct {
	ID       string `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
	RoleID   string `json:"role_id"`
	Role     Role   `json:"-"`
}

type Role struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
