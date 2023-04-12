package entities

import "gorm.io/plugin/soft_delete"

type Role struct {
	ID        string                `json:"id"`
	Name      string                `json:"name"`
	CreatedAt int64                 `json:"created_at"`
	UpdatedAt int64                 `json:"updated_at"`
	DeletedAt soft_delete.DeletedAt `json:"deleted_at" gorm:"index"`
}
