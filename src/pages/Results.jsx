import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import useQuizStore from "../store/quizStore";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const { score, questions, restartQuiz } = useQuizStore();
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Section (1 part) */}
      <div className="flex-1 flex items-center">
        <h1 className="text-3xl font-bold text-foreground">Quiz Results</h1>
      </div>

      {/* Middle Section (3 parts) */}
      <div className="flex-3 flex items-center justify-center w-full">
        <Card className="max-w-lg w-full p-6 shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-bold text-primary">Your Score</h2>
            <p className="text-xl my-4 text-muted-foreground">
              {score} / {questions.length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section (1 part) */}
      <div className="flex-1 flex items-center">
        <Button 
          onClick={() => {
            restartQuiz();
            navigate("/quiz");
          }}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300"
        >
          Retry Quiz
        </Button>
      </div>
    </motion.div>
  );
}
