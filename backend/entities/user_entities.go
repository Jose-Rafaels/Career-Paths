package entities

import "gorm.io/plugin/soft_delete"

type User struct {
	ID              string `json:"id" gorm:"size:512"`
	FirstName       string `json:"first_name"`
	LastName        string `json:"last_name"`
	Email           string `json:"email" gorm:"unique"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirm_password"`
	IsActivated     bool   `json:"is_activated"`

	RoleID string `json:"role_id"`
	Role   Role   `json:"-" gorm:"foreignKey:RoleID;references:ID;null;constraint:onUpdate:Cascade,OnDelete:SET NULL"`

	CreatedAt int64                 `json:"created_at"`
	UpdatedAt int64                 `json:"updated_at"`
	DeletedAt soft_delete.DeletedAt `json:"deleted_at" gorm:"index"`
}
