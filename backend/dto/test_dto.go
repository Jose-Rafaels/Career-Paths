package dto

type Question struct {
	ID        string `json:"id"`
	Question  string `json:"question"`
	CreatedAt int64  `json:"created_at" bson:"created_at"`
}

type QuestionResponse struct {
}
