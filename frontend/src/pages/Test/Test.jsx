import React, { useState } from "react";
import axios from "axios";
import MBTIQuestion from "../../components/MBTIQuestions/MBTIQuestions";
import Result from "../Result/Result";
import questions from "../../data/Questions/Questions";
import DoLogin from "../../components/Do Login/DoLogin";
import { calculateMBTIResult } from "../../utils/NaiveBayes";

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
    const result = calculateMBTIResult(selectedAnswers);
    setResult(result);

    const data = {
      name_id: localStorage.getItem("userId"),
      test_result: result,
    };

    try {
      await axios.post("https://api-careerpaths.my.id/v1/test-user/create", data);
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
