// src/components/movie/pages/SearchPage.tsx

import { useRef, useState } from 'react'
import './movie.style.css'
import MovieCard from '../MovieCard'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) {
      setQuery('')
      inputRef.current?.focus()
      return
    }
    console.log('Будем искать →', query.trim())
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
        {/* временные тестовые данные */}
        {[
          {
            imdbID: 'tt1',
            Title: 'Test Movie 1',
            Year: '2023',
            Type: 'movie' as const,
            Poster: 'https://via.placeholder.com/300x450',
          },
          {
            imdbID: 'tt2',
            Title: 'Test Movie 2',
            Year: '2024',
            Type: 'series' as const,
            Poster: 'N/A',
          },
        ].map((fake) => (
          <MovieCard key={fake.imdbID} movie={fake} />
        ))}
      </div>
    </div>
  )
}
