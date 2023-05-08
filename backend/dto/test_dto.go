package dto

type CreateQuestion struct {
	ID        string `json:"id"`
	Question  string `json:"question"`
	Type1     string `json:"type_a"`
	Type2     string `json:"type_b"`
	Answare1  string `json:"answare_a"`
	Answare2  string `json:"answare_b"`
	CreatedAt int64  `json:"created_at" bson:"created_at"`
}

type Question struct {
	ID       string `json:"id"`
	Question string `json:"question"`
}

type QuestionResponse struct {
	Question Question `json:"question"`
	Answare1 Answare1 `json:"answare_a"`
	Answare2 Answare2 `json:"answare_b"`
	Type1    Type1    `json:"type_a"`
	Type2    Type2    `json:"type_b"`
}

type FindQuestionResponse struct {
	Question QuestionResponse `json:"question_response"`
}

type FindAllQuestionResponse struct {
	Question QuestionResponse `json:"question_response"`
}

type Answare1 struct {
	ID        string `json:"id"`
	Answare1  string `json:"answare_a"`
	CreatedAt int64  `json:"created_at" bson:"created_at"`
}

type Answare1Response struct {
	Answare1 string `json:"answare_a"`
}

type Answare2 struct {
	ID        string `json:"id"`
	Answare2  string `json:"answare_b"`
	CreatedAt int64  `json:"created_at" bson:"created_at"`
}

type Answare2Response struct {
	Answare2 string `json:"answare_2"`
}

type Type1 struct {
	ID        string `json:"id"`
	Type1     string `json:"type_a"`
	CreatedAt int64  `json:"created_at"`
}

type Type1Response struct {
	Type1 string `json:"type_a"`
}

type Type2 struct {
	ID        string `json:"id"`
	Type2     string `json:"type_b"`
	CreatedAt int64  `json:"created_at"`
}

type Type2Response struct {
	Type2 string `json:"type_b"`
}
