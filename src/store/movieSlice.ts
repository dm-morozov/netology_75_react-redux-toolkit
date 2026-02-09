// src/store/movieSlice.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  type SearchResponse,
  type MovieSearchResult,
} from '../types/movie.types'
import axios from 'axios'

const API_KEY = '5e1d52b3'

// AsyncThunk — это специальный инструмент в Redux Toolkit
// для работы с асинхронным кодом (запросами к серверу).
// Автоматически создать три состояния:
// pending (загрузка), fulfilled (успех) и rejected (ошибка)

// теперь задача сделать fetchMovie асинхронной функцией
// не функция запроса, а action creator,
// которую мы потом вызовем
// за место dispatch(setMovieByTitle(trimmedQuery)) с параметром title: string
export const fetchMovie = createAsyncThunk(
  'movie/fetchMovies', // Название действия
  async (title: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<SearchResponse>(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`,
      )

      // Расмотрим года API вернул ошибку
      if (response.data.Response === 'False') {
        return rejectWithValue(response.data.Error)
      }

      // в остальных случаях фильмы найдены и нам нужно их вывести
      return response.data.Search || []
    } catch (error) {
      // Если произошла ошибка сервера
      return rejectWithValue('Ошибка сети или сервера: ' + error)
    }
  },
)

//

// дополним интерфейс. Так как теперь теперь мы отслеживаем состояния в асинхронном коде
// теперь функция у нас не чистая и операция не происходит моментально

interface MovieState {
  results: MovieSearchResult[]
  loading: boolean // флаг загрузки
  error: string | null // ну и поле для ошибки
}

const initialState: MovieState = {
  // теперь result будет пустым массивом изначально. Без тестовых данных
  results: [],
  loading: false, // загрузка не происходит
  error: null, // начальное значение null, как в интерфейсе
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  // обычные редюсеры я удалил, мне они пока не нужны
  reducers: {},
  extraReducers(builder) {
    // теперь нужно состояние Thunk обработать
    // Redux автоматически создаёт 3 состояния:
    // fetchMovies.pending
    // fetchMovies.fulfilled
    // fetchMovies.rejected
    // их и будем обрабатывать. название действия fetchMovies как мы написали ранее

    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = false // данные получили и присваиваем false
        state.results = action.payload // кидаем реальные полученные данные из API в results
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false // в любом случае флаг загрузки ставим false, так как она завершена
        state.error = action.payload as string // это поведение мы описали выше в функции fetchMovie
      })
  },
})

// Экспортируем только редюсер
export default movieSlice.reducer
