import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button"
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
      <Card className="max-w-lg w-full p-6">
        <CardContent>
          <h2 className="text-2xl font-bold">Your Score</h2>
          <p className="text-xl my-4">{score} / {questions.length}</p>
          <Button onClick={() => {
            restartQuiz();
            navigate("/quiz");
          }}>
            Retry Quiz
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
