// src/components/movie/pages/MovieDetailPage.tsx

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import type { AppDispatch, RootState } from '../../../store'
import { useEffect } from 'react'
import {
  clearSelectedMovie,
  fetchMovieDetails,
} from '../../../store/movieSlice'

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>()

  const { error, loading, selectedMovie } = useSelector(
    (state: RootState) => state.movies,
  )

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id))
    }

    // функция отчистки сработает, когда пользователь уйдет со страницы
    return () => {
      dispatch(clearSelectedMovie())
    }
  }, [id, dispatch])

  if (loading) return <h3>Загрузка информации о фильме...</h3>
  if (error) return <p className="details-error">{error}</p>

  if (!selectedMovie) return null

  return (
    <div className="movie-detail">
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <div className="info">
        <h2>
          {selectedMovie.Title} ({selectedMovie.Year})
        </h2>
        <p>
          <strong>Жанр:</strong> {selectedMovie.Genre}
        </p>
        <p>
          <strong>Режиссер:</strong> {selectedMovie.Director}
        </p>
        <p>
          <strong>Актеры:</strong> {selectedMovie.Actors}
        </p>
        <p>
          <strong>Сюжет:</strong> {selectedMovie.Plot}
        </p>
        <p>
          <strong>Рейтинг IMDb:</strong> {selectedMovie.imdbRating}
        </p>
      </div>
    </div>
  )
}

export default MovieDetailPage
