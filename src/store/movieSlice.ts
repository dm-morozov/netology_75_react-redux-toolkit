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
      Poster: 'https://via.placeholder.com/300x450?text=Redux+Ready',
    },
  ],
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: undefined,
})

export default movieSlice
