// src/store/movieSlice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
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

    // В Redux Toolkit данные,
    // которые мы передаем в экшен, называются Payload (полезная нагрузка)
    setMovieByTitle: (state, action: PayloadAction<string>) => {
      state.results = [
        {
          imdbID: 'custom-id',
          Title: action.payload, // Используем данные из инпута
          Year: '2026',
          Type: 'movie',
          Poster: `https://placehold.co/300x450?text=${action.payload}`,
        },
      ]
    },
  },
})

export const { setTestMovie, setMovieByTitle } = movieSlice.actions
// Экспортируем только редюсер
export default movieSlice.reducer
