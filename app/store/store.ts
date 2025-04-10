
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './slice/quizSlice'; // Импорт слайса

export const store = configureStore({
  reducer: {
    quiz: quizReducer, // Добавьте другие редьюсеры при необходимости
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;