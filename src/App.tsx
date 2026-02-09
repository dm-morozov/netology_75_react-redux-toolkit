import { Link, Route, Routes } from 'react-router-dom'
// import Counter from './components/Counter'
// import Todos from './components/Todos'
import './App.css'
import SearchPage from './components/movie/pages/SearchPage'
import MovieDetailPage from './components/movie/pages/MovieDetailPage'

function App() {
  return (
    <>
      <h1 className="title">Redux Toolkit</h1>

      {/* Если хочешь, чтобы Todos и Counter были видны ВСЕГДА, оставляй их тут */}
      {/* <Todos />
      <Counter /> */}
      <div className="movie-app-container">
        <h2>Поиск фильмов (www.omdbapi.com)</h2>

        <nav className="main-nav">
          <Link to="/" className="nav-link">
            Поиск
          </Link>
          <Link to="/movie/tt12345" className="nav-link">
            Пример фильма
          </Link>
          <Link to="/favorites" className="nav-link">
            Избранное
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/favorites" element={<div>Избранное</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App
