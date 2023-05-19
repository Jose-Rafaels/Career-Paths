package entities

type WorkPersonality struct {
	ID                        string `json:"id" gorm:"size:512"`
	Profession                string `json:"profession"`
	Description               string `json:"description"`
	DutiesandResponsibilities string `json:"duties_and_responsibilities"`
	Competition               string `json:"competition"`
	Subject                   string `json:"subject"`
}
