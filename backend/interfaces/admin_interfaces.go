package interfaces

import "career-paths/entities"

type AdminRepository interface {
	LoginAdmin(email string) (*entities.Admin, error)
}
