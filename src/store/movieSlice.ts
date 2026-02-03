// src/store/movieSlice.ts

import { createSlice } from '@reduxjs/toolkit'
import type { MovieSearchResult } from '../types/movie.types'

interface MovieState {
  results: MovieSearchResult[]
}

const initialState: MovieState = {
  results: [
    {
      imdbID: 'tt0111161',
      Title: 'Побег из Шоушенка (Redux)',
      Year: '1994',
      Type: 'movie',
      Poster: 'https://placehold.co/300x450?text=Redux+Ready',
    },
  ],
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // создаем действие Action
    // action — это объект, который несет новые данные
    setTestMovie: (state) => {
      state.results = [
        {
          imdbID: 'tt0080684',
          Title: 'Звёздные войны: Империя наносит ответный удар',
          Year: '1980',
          Type: 'movie',
          Poster: 'https://placehold.co/300x450?text=Action+Worked!',
        },
      ]
    },
  }, // Пустой редьюсер
})

export const { setTestMovie } = movieSlice.actions
// Экспортируем только редюсер
export default movieSlice.reducer

console.log({ setTestMovie })
