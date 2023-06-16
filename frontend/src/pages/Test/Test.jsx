import React, { useState } from "react";
import axios from "axios";
import MBTIQuestion from "../../components/MBTIQuestions/MBTIQuestions";
import Result from "../Result/Result";
import questions from "../../data/Questions/Questions";
import DoLogin from "../../components/Do Login/DoLogin";

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState("");

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

  const calculateMBTI = async () => {
    const score = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    // menghitung skor berdasarkan jawaban yang telah dipilih
    for (const [questionId, answerId] of Object.entries(selectedAnswers)) {
      const question = questions.find((q) => q.id === parseInt(questionId));
      const answer = question.options.find((o) => o.id === answerId);
      if (answer.type) {
        for (const t of answer.type) {
          score[t] += 1;
        }
      }
    }

    // menentukan hasil MBTI berdasarkan skor yang dihitung
    let type = "";
    type += score.I >= score.E ? "I" : "E";
    type += score.S >= score.N ? "S" : "N";
    type += score.T >= score.F ? "T" : "F";
    type += score.J >= score.P ? "J" : "P";

    setResult(type);
    const data = {
      name_id: localStorage.getItem("userId"),
      test_result: type,
    };

    try {
      await axios.post("http://localhost:8080/v1/test-user/create", data);
      console.log("Data berhasil disimpan di server!");
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data di server:", error);
    }
  };

  return (
    <>
      {localStorage.getItem("userId") ? (
        <>
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
        </>
      ) : (
        <>
          <>
            <DoLogin />
          </>
        </>
      )}
    </>
  );
};

export default Test;
