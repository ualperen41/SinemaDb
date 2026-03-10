import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies, clearSearch } from '../actions/movieActions.js'
import MovieCard from '../components/MovieCard.jsx'
import Loader from '../components/Loader.jsx'

const SearchPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { results, loading } = useSelector(s => s.search)
  const [query, setQuery] = useState('')

  const params = new URLSearchParams(location.search)
  const q = params.get('q') || ''

  useEffect(() => {
    if (q) {
      setQuery(q)
      dispatch(searchMovies(q))
    }
    return () => dispatch(clearSearch())
  }, [q, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  const filtered = results.filter(r => r.media_type !== 'person' && (r.title || r.name))

  return (
    <div className="page">
      <div className="search-page-header">
        <h1>Arama</h1>
        <form className="search-page-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Film veya dizi ara..."
            className="search-page-input"
            autoFocus
          />
          <button type="submit" className="search-page-btn">Ara</button>
        </form>
        {q && <p className="search-info">"{q}" için {filtered.length} sonuç</p>}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="section">
          {filtered.length > 0 ? (
            <div className="movies-grid">
              {filtered.map(item => (
                <MovieCard
                  key={item.id}
                  movie={item}
                  isTV={item.media_type === 'tv'}
                />
              ))}
            </div>
          ) : q ? (
            <div className="empty-state">
              <span>🔍</span>
              <p>Sonuç bulunamadı.</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default SearchPage