import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import useQuizStore from "../store/quizStore";
import { Button } from "../components/ui/button";
import "./Quiz.css";

export default function Quiz() {
  const {
    questions,
    currentIndex,
    answers,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz,
    setQuestions, // assume you've added this in your store to set fetched questions
  } = useQuizStore();

  const navigate = useNavigate(); // Get the navigate function

  // Local state for animations and submission.
  const [isSliding, setIsSliding] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Fetch questions from Flask API on mount.
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/questions")
      .then((response) => {
        if (response.data && response.data.questions) {
          setQuestions(response.data.questions);
        }
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
      });
  }, [setQuestions]);

  // If no questions loaded yet, display a loading message.
  if (!questions || questions.length === 0) {
    return <div className="text-center mt-10">Loading questions...</div>;
  }

  // Get the current question and the selected option.
  const currentQuestion = questions[currentIndex];
  const selectedOption = answers[currentQuestion.id] ?? null;

  // Handler for moving to the next question with a slide animation.
  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      nextQuestion();
      setIsSliding(false);
    }, 500);
  };

  // Handler for submitting the quiz.
  // Instead of displaying the result here, navigate to the /results page.
  const handleSubmitQuiz = async () => {
    setLoadingSubmit(true);
    setSubmitError("");
    // Build the scores array based on answers.
    const scores = questions.map((q) => answers[q.id] || 0);
    try {
      const response = await axios.post("http://127.0.0.1:5000/results", { scores });
      // Navigate to the /results page with the result data in state.
      navigate("/results", { state: { result: response.data.result } });
    } catch (error) {
      console.error("Error submitting quiz:", error);
      setSubmitError("Failed to submit quiz. Please try again.");
    } finally {
      setLoadingSubmit(false);
    }
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
              {/* Reset Quiz Button */}
              <Button
                onClick={resetQuiz}
                className="w-full sm:w-auto bg-gray-300 text-gray-800 hover:bg-gray-400 px-4 py-2 rounded-md transition-colors duration-300"
              >
                Reset Quiz
              </Button>
              {currentIndex < questions.length - 1 ? (
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
              ) : (
                <Button
                  onClick={handleSubmitQuiz}
                  disabled={selectedOption === null || loadingSubmit}
                  className={`w-full sm:w-auto px-4 py-2 rounded-md transition-colors duration-300 ${
                    selectedOption === null || loadingSubmit
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {loadingSubmit ? "Submitting..." : "Submit Quiz"}
                </Button>
              )}
            </div>
            {submitError && (
              <p className="mt-4 text-center text-red-600">{submitError}</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
