import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, fetchGenres, setActiveGenre } from '../actions/movieActions.js'
import MovieCard from '../components/MovieCard.jsx'
import Hero from '../components/Hero.jsx'
import Loader from '../components/Loader.jsx'

const CATEGORIES = [
  { key: 'popular', label: 'Popüler' },
  { key: 'now_playing', label: 'Vizyonda' },
  { key: 'top_rated', label: 'En İyi' },
  { key: 'upcoming', label: 'Yakında' },
]

const Home = () => {
  const dispatch = useDispatch()
  const { movies, loading, error, currentPage, totalPages } = useSelector(s => s.movies)
  const { list: genres, activeGenre } = useSelector(s => s.genres)
  const [category, setCategory] = useState('popular')

  useEffect(() => {
    dispatch(fetchMovies(category, 1))
    dispatch(fetchGenres())
  }, [dispatch, category])

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    dispatch(setActiveGenre(null))
  }

  const loadMore = () => {
    if (currentPage < totalPages) {
      dispatch(fetchMovies(category, currentPage + 1))
    }
  }

  const filteredMovies = activeGenre
    ? movies.filter(m => m.genre_ids?.includes(activeGenre))
    : movies

  return (
    <div className="page">
      <Hero movies={movies} />
      <div className="section">
        <div className="section-header">
          <h2>Filmler</h2>
          <div className="category-tabs">
            {CATEGORIES.map(c => (
              <button
                key={c.key}
                className={`tab ${category === c.key ? 'active' : ''}`}
                onClick={() => handleCategoryChange(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {genres.length > 0 && (
          <div className="genre-filter">
            <button
              className={`genre-chip ${!activeGenre ? 'active' : ''}`}
              onClick={() => dispatch(setActiveGenre(null))}
            >Tümü</button>
            {genres.slice(0, 12).map(g => (
              <button
                key={g.id}
                className={`genre-chip ${activeGenre === g.id ? 'active' : ''}`}
                onClick={() => dispatch(setActiveGenre(g.id))}
              >{g.name}</button>
            ))}
          </div>
        )}

        {error && <div className="error-msg">⚠ {error}</div>}

        {loading && movies.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="movies-grid">
              {filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            {!activeGenre && currentPage < totalPages && (
              <div className="load-more-container">
                <button className="load-more-btn" onClick={loadMore} disabled={loading}>
                  {loading ? 'Yükleniyor...' : 'Daha Fazla Göster'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Home