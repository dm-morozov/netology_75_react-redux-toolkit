import { useSelector } from 'react-redux'
import { type RootState } from '../../../store'
import MovieCard from '../MovieCard'

const FavoritesPage = () => {
  const favorites = useSelector((state: RootState) => state.movies.favorites)

  return (
    <div>
      <h3>Ваше избранное</h3>
      {favorites.length === 0 ? (
        <p>Список пуст. Добавьте что-нибудь!</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
