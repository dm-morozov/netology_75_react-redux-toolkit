import type { MovieSearchResult } from '../../types/movie.types'

interface MovieCardProps {
  movie: MovieSearchResult
}
const MovieCard = ({ movie }: MovieCardProps) => {
  return (
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
  )
}

export default MovieCard
