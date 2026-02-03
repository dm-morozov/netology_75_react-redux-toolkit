// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import counterReducer from '../features/counter/counterSlice'
import movieReducer from './movieSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer, // Несколько slices
    movies: movieReducer, // добавили ящик для фильмов
  },
})

// Для TS: типы RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
