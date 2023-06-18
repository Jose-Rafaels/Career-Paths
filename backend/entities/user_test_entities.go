package entities

type TestUser struct {
	ID         string `json:"id" gorm:"size:512;primaryKey"`
	NameID     string `json:"name_id"`
	TestResult string `json:"test_result"`
	User       User   `json:"-" gorm:"foreignKey:NameID;references:ID;null;constraint:onUpdate:Cascade,OnDelete:SET NULL"`
	FirstName  string `json:"first_name" gorm:"-"`
	LastName   string `json:"last_name" gorm:"-"`
	Email      string `json:"email" gorm:"-"`
}
