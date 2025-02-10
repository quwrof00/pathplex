import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useQuizStore from "../store/quizStore";
import { Button } from "../components/ui/button";
import "./Quiz.css";

export default function Quiz() {
  const { questions, currentIndex, answers, selectAnswer, nextQuestion, previousQuestion, resetQuiz } = useQuizStore();
  const currentQuestion = questions[currentIndex];
  const selectedOption = answers[currentQuestion.id] ?? null;

  const answersArray = Object.values(answers);
  let averagedAnswers = [];
  for (let i = 0; i < answersArray.length; i += 2) {
    let avg = (answersArray[i] + (answersArray[i + 1] || 0)) / (answersArray[i + 1] !== undefined ? 2 : 1);
    averagedAnswers.push(avg);
  }

  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      nextQuestion();
      setIsSliding(false);
    }, 500);
  };

  return (
    <div className="quiz-container min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 pt-24">

      <div className="w-full max-w-lg sm:max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white text-center mb-6 sm:mb-8">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 p-4 text-center ${
                    selectedOption === option.value
                      ? "bg-green-400 text-black"
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => selectAnswer(currentQuestion.id, option.value)}
                  animate={
                    isSliding && selectedOption !== option.value
                      ? { x: "100%", opacity: 0 }
                      : { x: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-lg font-medium">{option.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-between items-center mt-6 sm:mt-8 gap-2 sm:gap-4">
              <Button
                onClick={previousQuestion}
                className="w-full sm:w-auto bg-gray-300 text-gray-800 hover:bg-gray-400 px-4 py-2 rounded-md transition-colors duration-300"
              >
                ← Previous
              </Button>
              
              <Button
                onClick={resetQuiz}
                className="w-full sm:w-auto bg-gray-300 text-gray-800 hover:bg-gray-400 px-4 py-2 rounded-md transition-colors duration-300"
              >
                Reset Quiz
              </Button>

              <Button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`w-full sm:w-auto px-4 py-2 rounded-md transition-colors duration-300 ${
                  selectedOption === null
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next →
              </Button>
            </div>

            {/* Debug: Display answers array
            <div className="mt-4 text-center text-gray-800 dark:text-white text-sm sm:text-base">
              Selected Values: {JSON.stringify(averagedAnswers)}
            </div> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
