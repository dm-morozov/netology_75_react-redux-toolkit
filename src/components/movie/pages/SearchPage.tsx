// src/components/movie/pages/SearchPage.tsx

import { useRef, useState } from 'react'
import './movie.style.css'
import MovieCard from '../MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../store/index'
import { fetchMovie } from '../../../store/movieSlice'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Создаем диспетчера (курьера)
  // Для асинхронных экшенов в TS лучше явно указать тип AppDispatch
  const dispatch = useDispatch<AppDispatch>()

  // Достаем массив результатов из Редукс
  // state.movies лежит в state
  // теперь нам нужно обратиться не к state.movies и достать все необходимое
  const { results, loading, error } = useSelector(
    (state: RootState) => state.movies,
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      setQuery('')
      inputRef.current?.focus()
      return
    }
    console.log('Будем искать →', trimmedQuery)

    // Диспатчим экшен
    // но уже теперь уже настояший поиск fetchMovie
    dispatch(fetchMovie(trimmedQuery))

    setQuery('') // Очищаем инпут
  }

  return (
    <div>
      <h3>Поиск фильмов</h3>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          ref={inputRef}
          type="search"
          name="query"
          id="query"
          className="search-input"
          placeholder="Введите название фильма..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? 'Ищем...' : 'Найти'}
        </button>
      </form>

      {
        // Показываем ошибку если она есть
        error && <p className="search-error">{error}</p>
      }

      <div className="movies-grid">
        {/* 4. Мапим данные из Redux вместо фейкового массива */}
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}
