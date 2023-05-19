package entities

type WorkPersonality struct {
	ID                         string `json:"id" gorm:"size:512"`
	TypePerson                 string `json:"type_person"`
	Profession                 string `json:"profession"`
	Description                string `json:"description"`
	DutiesandResponsibilities1 string `json:"duties_and_responsibilities_1"`
	DutiesandResponsibilities2 string `json:"duties_and_responsibilities_2"`
	DutiesandResponsibilities3 string `json:"duties_and_responsibilities_3"`
	DutiesandResponsibilities4 string `json:"duties_and_responsibilities_4"`
	DutiesandResponsibilities5 string `json:"duties_and_responsibilities_5"`
	DutiesandResponsibilities6 string `json:"duties_and_responsibilities_6"`
	Competition                string `json:"competition"`
	Subject                    string `json:"subject"`
}
