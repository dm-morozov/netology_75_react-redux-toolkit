import { Link, Route, Routes, useParams } from 'react-router-dom'
// import Counter from './components/Counter'
// import Todos from './components/Todos'
import './App.css'
import SearchPage from './components/movie/pages/SearchPage'

const MovieDetailsPlaceholder = () => {
  const { id } = useParams<{ id: string }>()
  return <div>Страница деталей фильма (id = {id})</div>
}

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
          <Route path="/movie/:id" element={<MovieDetailsPlaceholder />} />
          <Route path="/favorites" element={<div>Избранное</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App
