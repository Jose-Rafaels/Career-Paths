import React, { useState, useEffect } from "react";
import MBTIQuestion from "../../components/MBTIQuestions/MBTIQuestions";
import Result from "../Result/Result";

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
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

  const calculateMBTI = () => {
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
  };

  const createTest = async () => {
    const data = {
      id: "your_test_id",
      question: "your_question",
      type_a: "your_type_a",
      type_b: "your_type_b",
      answare_a: "your_answare_a",
      answare_b: "your_answare_b",
      created_at: Date.now(),
    };

    try {
      const response = await fetch("http://localhost:8080/v1/test/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Berhasil membuat tes
        const result = await response.json();
        console.log("Result:", result);
      } else {
        // Gagal membuat tes
        const error = await response.json();
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getQuestions = async () => {
    try {
      const response = await fetch("http://localhost:8080/v1/test/all");

      if (response.ok) {
        const result = await response.json();
        setQuestions(result); // Menyimpan data pertanyaan dari API ke state
      } else {
        const error = await response.json();
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  // const getTestById = async (testId) => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/v1/test/${testId}`);

  //     if (response.ok) {
  //       // Berhasil mendapatkan data tes berdasarkan ID
  //       const result = await response.json();
  //       console.log("Result:", result);
  //     } else {
  //       // Gagal mendapatkan data tes berdasarkan ID
  //       const error = await response.json();
  //       console.error("Error:", error);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

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
