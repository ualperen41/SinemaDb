import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTVShows } from '../actions/movieActions.js'
import MovieCard from '../components/MovieCard.jsx'
import Loader from '../components/Loader.jsx'

const CATEGORIES = [
  { key: 'popular', label: 'Popüler' },
  { key: 'on_the_air', label: 'Yayında' },
  { key: 'top_rated', label: 'En İyi' },
  { key: 'airing_today', label: 'Bugün' },
]

const TVShows = () => {
  const dispatch = useDispatch()
  const { tvShows, loading, error, currentPage, totalPages } = useSelector(s => s.movies)
  const [category, setCategory] = useState('popular')

  useEffect(() => {
    dispatch(fetchTVShows(category, 1))
  }, [dispatch, category])

  const loadMore = () => {
    if (currentPage < totalPages) dispatch(fetchTVShows(category, currentPage + 1))
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Diziler</h1>
      </div>
      <div className="section">
        <div className="section-header">
          <div className="category-tabs">
            {CATEGORIES.map(c => (
              <button
                key={c.key}
                className={`tab ${category === c.key ? 'active' : ''}`}
                onClick={() => setCategory(c.key)}
              >{c.label}</button>
            ))}
          </div>
        </div>

        {error && <div className="error-msg">⚠ {error}</div>}

        {loading && tvShows.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="movies-grid">
              {tvShows.map(show => (
                <MovieCard key={show.id} movie={show} isTV={true} />
              ))}
            </div>
            {currentPage < totalPages && (
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

export default TVShows