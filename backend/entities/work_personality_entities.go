package entities

type WorkPersonality struct {
	ID                         string `json:"id" gorm:"size:512;primaryKey"`
	TypePerson                 string `json:"type_person"`
	Profession1                string `json:"profession_1"`
	Profession2                string `json:"profession_2"`
	Profession3                string `json:"profession_3"`
	Profession4                string `json:"profession_4"`
	Profession5                string `json:"profession_5"`
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
