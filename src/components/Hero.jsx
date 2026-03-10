import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { backdropUrl } from '../utils/helpers.js'

const Hero = ({movies}) => {
    const [current, setCurrent] = useState(0)
    const featured = movies?.slice(0,5) || []

    useEffect(() => {
        if (featured.length === 0) return
        const timer = setInterval(() => setCurrent(c => (c + 1) % featured.length), 6000)
    }, [featured.length])
    
    if (featured.length === 0) return null

    const movie = featured[current]
    const title = movie.title || movie.name
  return (
    <div className='hero'>
        {backdropUrl(movie.backdrop_path) && (
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${backdropUrl(movie.backdrop_path)})` }}
        />
      )}
     <div className='hero-gradient'/>
     <div className='hero-content'>
        <div className='hero-meta'>
            <span className="hero-badge">🔥 Öne Çıkan</span>
          <span className="hero-rating">★ {movie.vote_average?.toFixed(1)}</span>
        </div>
        <h1 className='hero-title'>{title}</h1>
         <p className="hero-overview">
          {movie.overview?.slice(0, 200)}{movie.overview?.length > 200 ? '...' : ''}
        </p>
        <div className='hero-actions'>
            <Link to={`/movie/${movie.id}`} className='hero-btn primary'>Detayları Gör</Link>
        </div>
     </div>
     <div className='hero-dots'>
        {featured.map((_, i) => (
           <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
     </div>
    </div>
  )
}

export default Hero