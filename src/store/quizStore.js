import { create } from "zustand";

const useQuizStore = create((set) => ({
  questions: [
    {
      id: "O1",
      question: "I enjoy trying out new and unfamiliar activities.",
      options: [
        { text: "Strongly Agree", value: 3 },
        { text: "Agree", value: 2 },
        { text: "Neutral", value: 1 },
        { text: "Disagree", value: 0 }
      ]
    },
    {
      id: "O2",
      question: "How often do you engage in creative activities like painting, writing, or music?",
      options: [
        { text: "Very Often", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
        { text: "Never", value: 0 }
      ]
    },
    {
      id: "C1",
      question: "How do you handle tasks and responsibilities?",
      options: [
        { text: "Plan everything in advance and stay organized", value: 3 },
        { text: "Try to plan but sometimes procrastinate", value: 2 },
        { text: "Often leave things for the last moment", value: 1 },
        { text: "Handle things spontaneously without planning", value: 0 }
      ]
    },
    {
      id: "C2",
      question: "How well do you follow schedules and deadlines?",
      options: [
        { text: "Always meet deadlines and stay on track", value: 3 },
        { text: "Mostly follow deadlines with few delays", value: 2 },
        { text: "Often struggle with deadlines", value: 1 },
        { text: "Rarely follow a fixed schedule", value: 0 }
      ]
    },
    {
      id: "E1",
      question: "How do you feel about social gatherings?",
      options: [
        { text: "I love them and enjoy meeting new people", value: 3 },
        { text: "I like them but prefer familiar groups", value: 2 },
        { text: "I don't mind them but don't actively seek them out", value: 1 },
        { text: "I avoid them whenever possible", value: 0 }
      ]
    },
    {
      id: "E2",
      question: "How often do you initiate conversations in a social setting?",
      options: [
        { text: "Almost always", value: 3 },
        { text: "Sometimes, depending on the situation", value: 2 },
        { text: "Rarely, I wait for others to start", value: 1 },
        { text: "Never, I prefer to stay quiet", value: 0 }
      ]
    },
    {
      id: "A1",
      question: "How do you usually respond to conflicts with others?",
      options: [
        { text: "Try to find a fair solution for everyone", value: 3 },
        { text: "Compromise if necessary but stand my ground", value: 2 },
        { text: "Defend my viewpoint strongly", value: 1 },
        { text: "Avoid the issue and let things escalate", value: 0 }
      ]
    },
    {
      id: "A2",
      question: "How do you react if a friend needs help with a difficult task?",
      options: [
        { text: "Help immediately without hesitation", value: 3 },
        { text: "Help if it's convenient for me", value: 2 },
        { text: "Consider but usually decline", value: 1 },
        { text: "Avoid helping altogether", value: 0 }
      ]
    },
    {
      id: "N1",
      question: "How often do you feel anxious or stressed?",
      options: [
        { text: "Almost all the time", value: 3 },
        { text: "Frequently but I manage it", value: 2 },
        { text: "Occasionally, but not a big issue", value: 1 },
        { text: "Rarely or never", value: 0 }
      ]
    },
    {
      id: "N2",
      question: "When faced with a failure, how do you respond?",
      options: [
        { text: "Feel overwhelmed and struggle to move on", value: 3 },
        { text: "Get upset but try to learn from it", value: 2 },
        { text: "Acknowledge it but move on quickly", value: 1 },
        { text: "Accept it easily and stay unaffected", value: 0 }
      ]
    },
    {
      id: "NA1",
      question: "If the price of an item increases by 20% and then decreases by 20%, what is the final percentage change?",
      options: [
        { text: "0%", value: 0 },
        { text: "-4%", value: 3 },
        { text: "+4%", value: 1 },
        { text: "-2%", value: 2 }
      ]
    },
    {
      id: "NA2",
      question: "A train moves at a speed of 60 km/h. How much time will it take to cover 300 km?",
      options: [
        { text: "3 hours", value: 1 },
        { text: "5 hours", value: 3 },
        { text: "6 hours", value: 0 },
        { text: "4 hours", value: 2 }
      ]
    },
    {
      id: "SA1",
      question: "Which shape will be formed when a cube is unfolded?",
      options: [
        { text: "A rectangle", value: 0 },
        { text: "A cross-shaped net", value: 3 },
        { text: "A triangle", value: 1 },
        { text: "A pentagon", value: 2 }
      ]
    },
    {
      id: "SA2",
      question: "How will the reflection appear if a mirror is placed on the right side of an object?",
      options: [
        { text: "Left and right are reversed", value: 3 },
        { text: "Upside-down", value: 1 },
        { text: "No change in orientation", value: 0 },
        { text: "Only the top and bottom are reversed", value: 2 }
      ]
    },
    {
      id: "PA1",
      question: "Find the odd one out: Circle, Triangle, Sphere, Square.",
      options: [
        { text: "Circle", value: 0 },
        { text: "Sphere", value: 3 },
        { text: "Triangle", value: 1 },
        { text: "Square", value: 2 }
      ]
    },
    {
      id: "PA2",
      question: "Which number is missing in the series? 2, 6, 12, 20, __, 42",
      options: [
        { text: "28", value: 2 },
        { text: "30", value: 0 },
        { text: "32", value: 1 },
        { text: "36", value: 3 }
      ]
    },
    {
      id: "AR1",
      question: "Which pattern comes next in the sequence? (Image-based question)",
      options: [
        { text: "Correct pattern", value: 3 },
        { text: "Random shape", value: 0 },
        { text: "Similar shape but wrong position", value: 1 },
        { text: "Similar pattern but incorrect detail", value: 2 }
      ]
    },
    {
      id: "AR2",
      question: "If A = 1, B = 2, and C = 3... then what is the sum of the letters in the word \"DOG\"?",
      options: [
        { text: "26", value: 1 },
        { text: "24", value: 3 },
        { text: "20", value: 0 },
        { text: "22", value: 2 }
      ]
    },
    {
      id: "VR1",
      question: "Which word best completes the sentence? \"The scientist conducted an ___ experiment to test the hypothesis.\"",
      options: [
        { text: "Amazing", value: 0 },
        { text: "Controlled", value: 3 },
        { text: "Random", value: 1 },
        { text: "Impossible", value: 2 }
      ]
    },
    {
      id: "VR2",
      question: "Choose the correct synonym for \"Innovative.\"",
      options: [
        { text: "Traditional", value: 0 },
        { text: "Creative", value: 3 },
        { text: "Boring", value: 1 },
        { text: "Risky", value: 2 }
      ]
    }
  ],
  currentIndex: 0,
  answers: [],
  progress: 0,

  selectAnswer: (questionId, answer) => {
    set((state) => {
      const updatedAnswers = { ...state.answers, [questionId]: answer };
      return { answers: updatedAnswers };
    });
  },

  nextQuestion: () => {
    set((state) => {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex < state.questions.length) {
        return {
          currentIndex: nextIndex,
          progress: ((nextIndex + 1) / state.questions.length) * 100,
        };
      }
      return state; // Stay at the last question
    });
  },

  previousQuestion: () => {
    set((state) => {
      const prevIndex = state.currentIndex - 1;
      if (prevIndex >= 0) {
        return {
          currentIndex: prevIndex,
          progress: ((prevIndex + 1) / state.questions.length) * 100,
        };
      }
      return state; // Stay at the first question
    });
  },

  resetQuiz: () => {
    set({ currentIndex: 0, answers: {}, progress: 0 });
  },
}));

export default useQuizStore;
