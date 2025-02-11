// store/quizStore.js
import { create } from "zustand";

const useQuizStore = create((set) => ({
  questions: [],
  currentIndex: 0,
  answers: {},
  // Action to set the questions fetched from the API
  setQuestions: (questions) => set({ questions }),
  selectAnswer: (questionId, value) =>
    set((state) => ({ answers: { ...state.answers, [questionId]: value } })),
  nextQuestion: () =>
    set((state) => ({
      currentIndex:
        state.currentIndex < state.questions.length - 1
          ? state.currentIndex + 1
          : state.currentIndex,
    })),
  previousQuestion: () =>
    set((state) => ({
      currentIndex: state.currentIndex > 0 ? state.currentIndex - 1 : 0,
    })),
  resetQuiz: () => set({ currentIndex: 0, answers: {} }),
}));

export default useQuizStore;
