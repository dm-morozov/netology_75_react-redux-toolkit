import React from 'react'
import { Link } from 'react-router-dom'
import type { MovieSearchResult } from '../../types/movie.types'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { addToFavorites, removeFromFavorites } from '../../store/movieSlice'

interface MovieCardProps {
  movie: MovieSearchResult
}
const MovieCard = ({ movie }: MovieCardProps) => {
  const dispatch = useDispatch()

  const isFavorite = useSelector((state: RootState) => {
    return state.movies.favorites.some((fav) => fav.imdbID === movie.imdbID)
  })

  // Проверяем находится ли данный фильм в избранном
  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.imdbID))
    } else {
      dispatch(addToFavorites(movie))
    }
  }

  return (
    <div className="movie-card-container">
      <Link to={`/movie/${movie.imdbID}`} className="movie-card-link">
        <div className="movie-card">
          <img
            src={
              movie.Poster === 'N/A'
                ? 'https://via.placeholder.com/300x450?text=No+Poster'
                : movie.Poster
            }
            alt={movie.Title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h4 className="movie-title">{movie.Title}</h4>
            <p className="movie-year">{movie.Year}</p>
            <p className="movie-type">{movie.Type}</p>
          </div>
        </div>
      </Link>
      <button
        onClick={handleFavoriteClick}
        className={`fav-button ${isFavorite ? 'active' : ''}`}
      >
        {isFavorite ? '❤️ Удалить' : '🤍 В избранное'}
      </button>
    </div>
  )
}

export default MovieCard
