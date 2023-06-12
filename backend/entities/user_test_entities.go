package entities

type TestUser struct {
	ID                string          `json:"id" gorm:"size:512;primaryKey"`
	NameID            string          `json:"name_id"`
	User              User            `json:"-" gorm:"foreignKey:NameID;references:ID;null;constraint:onUpdate:Cascade,OnDelete:SET NULL"`
	WorkPersonalityID string          `json:"work_personality_id"`
	WorkPersonality   WorkPersonality `json:"-" gorm:"foreignKey:WorkPersonalityID;references:ID;null;constraint:onUpdate:Cascade,OnDelete:SET NULL"`
}
