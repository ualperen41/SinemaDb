import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard.jsx'

const Watchlist = () => {
  const { items } = useSelector(s => s.watchlist)

  return (
    <div className="page">
      <div className="page-header">
        <h1>İzleme Listem</h1>
        <span className="count-badge">{items.length} içerik</span>
      </div>
      <div className="section">
        {items.length === 0 ? (
          <div className="empty-state">
            <span>📋</span>
            <p>İzleme listeniz boş.</p>
            <p className="empty-sub">Film veya dizi kartlarındaki + butonuna tıklayarak ekleyebilirsiniz.</p>
          </div>
        ) : (
          <div className="movies-grid">
            {items.map(movie => (
              <MovieCard key={movie.id} movie={movie} isTV={movie.isTV} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Watchlist