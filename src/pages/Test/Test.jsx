import React, { useState } from "react";
import MBTIQuestion from "../../components/MBTIQuestions/MBTIQuestions";
import Result from "../Result/Result";
import questions from "../../data/Questions/Questions";

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerId });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateMBTI();
    }
  };

  const calculateMBTI = () => {
    const score = {
      I: 0,
      E: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    // Calculate scores based on selected answers
    for (const [questionId, answerId] of Object.entries(selectedAnswers)) {
      const question = questions.find((q) => q.id === parseInt(questionId));
      const answer = question.options.find((o) => o.id === answerId);
      if (answer.type) {
        for (const t of answer.type) {
          score[t]++;
        }
      }
    }

    // Determine MBTI type based on scores
    let type = "";
    type += score.I > score.E ? "I" : "E";
    type += score.S > score.N ? "S" : "N";
    type += score.T > score.F ? "T" : "F";
    type += score.J > score.P ? "J" : "P";

    setResult(type);
  };

  return (
    <div>
      {result ? (
        <Result result={result} />
      ) : (
        <MBTIQuestion
          question={questions[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default Test;
