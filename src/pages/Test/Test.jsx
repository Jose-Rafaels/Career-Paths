import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Title from "../../components/Layout/Title";
import questions from "../../components/Questions/Questions";

const TestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

    // Calculate the score for each letter based on the selected answers
    for (const question of questions) {
      const answerId = selectedAnswers[question.id];
      const option = question.options.find((option) => option.id === answerId);
      switch (question.id) {
        case 1:
          score[option.text === "Alone" ? "I" : "E"]++;
          break;
        case 2:
          score[option.text === "Present" ? "S" : "N"]++;
          break;
        case 3:
          score[option.text === "Logic and reason" ? "T" : "F"]++;
          break;
        case 4:
          score[option.text === "Multiple tasks at once" ? "P" : "J"]++;
          break;
        case 5:
          score[option.text === "Plan and organize" ? "J" : "P"]++;
          break;
        case 6:
          score[option.text === "Objective" ? "T" : "F"]++;
          break;
        case 7:
          score[option.text === "Stick to the rules" ? "J" : "P"]++;
          break;
        case 8:
          score[option.text === "Spontaneous" ? "P" : "J"]++;
          break;
        default:
          break;
      }
    }

    // Determine the MBTI personality type based on the score
    let mbti = "";
    mbti += score["I"] > score["E"] ? "I" : "E";
    mbti += score["S"] > score["N"] ? "S" : "N";
    mbti += score["T"] > score["F"] ? "T" : "F";
    mbti += score["J"] > score["P"] ? "J" : "P";

    setResult(mbti);
  };
  return (
    <Title title="Test">
      <>
        <div className="test">
          <p className="title">Jawab Sesuai Dengan Diri Anda!</p>
          <p className="intro-subtitle">
            Silahkan pilih salah satu yang sesuai dengan diri Anda dari setiap
            pertanyaan.
          </p>

          <div className="box-progress" data-aos="fade-up">
            <p className="progress">Progress 8/10</p>
            <ProgressBar animated now={50} />
          </div>

          <div className="box-question">
            {result ? (
              <p>Your MBTI personality type is: {result}</p>
            ) : (
              <>
                <p className="soal">{questions[currentQuestionIndex].text}</p>
                {questions[currentQuestionIndex].options.map((option) => (
                  <div>
                    <button
                      className="option"
                      key={option.id}
                      onClick={() =>
                        handleAnswerSelect(
                          questions[currentQuestionIndex].id,
                          option.id
                        )
                      }
                    >
                      <p className="opsi">{option.text}</p>
                    </button>
                  </div>
                ))}
                <button className="button-next" onClick={handleNextQuestion}>
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </>
    </Title>
  );
};

export default TestPage;
