import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Title from "../Layout/Title";

const MBTIQuestion = ({
  question,
  onAnswerSelect,
  onNextQuestion,
  totalQuestions,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleAnswerClick = (answerId) => {
    onAnswerSelect(question.id, answerId);
    onNextQuestion();
    setCurrentQuestion(currentQuestion + 1);
  };

  const progress = Math.ceil((currentQuestion / 52) * 100);

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
            <p className="progress">
              Progress {currentQuestion}/{52}
            </p>
            <ProgressBar animated now={progress} label={`${progress}%`} />
          </div>

          <div className="box-question" data-aos="fade-up">
            <p className="soal">{question.text}</p>
            <div>
              {question.options.map((option) => (
                <button
                  className="option"
                  key={option.id}
                  onClick={() => handleAnswerClick(option.id)}
                >
                  <p className="opsi">{option.text}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    </Title>
  );
};

export default MBTIQuestion;
