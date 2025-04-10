
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  currentQuestionIndex: number;
  answers: Array<{ questionId: number; answer: string }>; // Уточняем структуру
}

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: [],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ questionId: number; answer: string }>) => { // Уточняем PayloadAction
        state.answers.push({ questionId: action.payload.questionId, answer: action.payload.answer }); // Правильный синтаксис
      },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = [];
    },
  },
});

export const { setAnswer, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;