// src/components/movie/pages/SearchPage.tsx

import { useRef, useState } from 'react'
import './movie.style.css'
import MovieCard from '../MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store/index'
import { setTestMovie } from '../../../store/movieSlice'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Создаем диспетчера (курьера)
  const dispatch = useDispatch()

  // Достаем массив результатов из Редукс
  // state.movies лежит в state

  const results = useSelector((state: RootState) => state.movies.results)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) {
      setQuery('')
      inputRef.current?.focus()
      return
    }
    console.log('Будем искать →', query.trim())

    dispatch(setTestMovie())
    setQuery('')
    // здесь позже подключим redux
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
        <button type="submit" className="search-button">
          Найти
        </button>
      </form>

      <div className="movies-grid">
        {/* 4. Мапим данные из Redux вместо фейкового массива */}
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}
