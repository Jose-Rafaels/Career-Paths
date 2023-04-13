package entities

import "gorm.io/plugin/soft_delete"

type Admin struct {
	ID        string `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email" gorm:"unique"`
	Password  string `json:"password"`

	RoleID string `json:"role_id" gorm:"size:512"`
	Role   Role   `json:"-"`

	CreatedAt int64                 `json:"created_at"`
	UpdatedAt int64                 `json:"updated_at"`
	DeletedAt soft_delete.DeletedAt `json:"deleted_at" gorm:"index"`
}
