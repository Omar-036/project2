import React, { useState } from "react";

function Quiz({ quizData }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerShown, setAnswerShown] = useState(false);

  const handleOptionClick = (selectedOption) => {
    setSelectedOption(selectedOption);
    const correctAnswer =
      quizData.quiz.questions[currentQuestion].correct_answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setAnswerShown(true);
  };

  const goToNextQuestion = () => {
    setSelectedOption(null);
    setAnswerShown(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setAnswerShown(false);
  };

  return (
    <div className="p-8 my-24 container mx-auto">
      <div className=" p-12 bg-gray-900  rounded-md shadow-md">
        {!showResult ? (
          <div className="flex w-full items-center gap-8">
            <div className="w-1/2 max-w-full">
              <h1 className="text-3xl font-bold text-center mb-4 ">
                {quizData.quiz.title}
              </h1>
              <p className="text-gray-600 text-center mb-8">
                {quizData.quiz.description}
              </p>
              <h2 className="text-lg font-bold mb-6">
                Question {currentQuestion + 1}:
              </h2>
              <p className="text-gray-300 tracking-wider mb-4">
                {quizData.quiz.questions[currentQuestion].question}
              </p>

              <ul
                className={`mb-6  ${answerShown ? "pointer-events-none" : ""} `}
              >
                {quizData.quiz.questions[currentQuestion].options.map(
                  (option, index) => (
                    <li
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className={`py-2 px-4 rounded-md cursor-pointer mb-2 ${
                        answerShown
                          ? option ===
                            quizData.quiz.questions[currentQuestion]
                              .correct_answer
                            ? "bg-green-500 text-white"
                            : option === selectedOption
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 text-primary tracking-wide font-medium"
                          : "bg-gray-200 hover:bg-gray-300 text-primary font-medium tracking-wide "
                      }`}
                    >
                      {option}
                    </li>
                  )
                )}
              </ul>

              <button
                onClick={goToNextQuestion}
                className={`${
                  !selectedOption ? "invisible" : ""
                } py-2 px-4 bg-blue-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed`}
              >
                Next
              </button>
            </div>
            <div className="w-1/2 h-full self-star -mt-12 pl-8">
              {answerShown && (
                <>
                  <h2 className="text-3xl capitalize mb-2">explanation:</h2>
                  <p className="text-lg py-4 text-gray-400 ">
                    {quizData.quiz.questions[currentQuestion].explanation}
                  </p>
                </>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">Quiz Result</h1>
            <p className="text-gray-600 mb-6">
              You scored {score} out of {quizData.quiz.questions.length}.
            </p>
            <button
              onClick={restartQuiz}
              className="py-2 px-4 bg-blue-500 text-white rounded-md"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
