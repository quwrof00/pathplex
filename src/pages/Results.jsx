import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import useQuizStore from "../store/quizStore";
import { useNavigate } from "react-router-dom";


const Results = () => {
  const { resetQuiz } = useQuizStore();
  const { state } = useLocation();
  const navigate = useNavigate();
  const result = state?.result;

  if (!result) {
    return <div>No results found.</div>;
  }

  const handleReset = () => {
    resetQuiz(); // Resets the quiz store
    navigate("/"); // Redirects to the Quiz page (adjust the path as needed)
  };

  return (
    <div className="results-page min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">
          Quiz Results
        </h2>
        {/* Big, bold predicted career */}
        <h1 className="text-4xl font-extrabold text-green-600">
          {result.prediction.career}
        </h1>
        <p className="text-xl text-gray-700 mt-2">
          {result.prediction.description}
        </p>
        <p className="text-sm text-gray-600 mt-4">
          <strong>Timestamp:</strong>{" "}
          {new Date(result.timestamp).toLocaleString()}
        </p>
        <Button
          onClick={handleReset}
          className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
        >
          Reset Quiz
        </Button>
      </div>
    </div>
  );
};

export default Results;
