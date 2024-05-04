import { useState } from "react";
import questions from "./data";
import css from "./QuizAppComp.module.css";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const handleAns = (userAnswer) => {
    if (userAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setResult(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setResult(false);
  };

  const handlePrevious = () => {
    currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    currentQuestion < questions.length - 1 &&
      setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      {result ? (
        <div className={css.scoreContainer}>
          Your Score : {score}
          <button className={css.kgFont} onClick={reset}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className={css.quizContainer}>
          <div className={css.Qinfo}>
            <div>
              Question : {currentQuestion + 1}/{questions.length}
            </div>
            <div className={`${css.btn} ${css.background}`}>
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className={css.ansBox}>
            {questions[currentQuestion].options.map((option) => (
              <button className={css.btn} onClick={() => handleAns(option)}>
                {option}
              </button>
            ))}
          </div>
          <div className={css.control}>
            <button className={css.kgFont} onClick={handlePrevious}>
              Previous
            </button>
            <button className={css.kgFont} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default QuizApp;
