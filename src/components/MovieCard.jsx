import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../actions/movieActions.js";
import { imgUrl, formatYear, ratingColor } from "../utils/helpers.js";

const MovieCard = ({ movie, isTV = false }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((s) => s.watchlist.items);
 const isInList = watchlist.some((m) => m.id === movie.id);

  const title = movie.title || movie.name;
  const date = movie.release_date || movie.first_air_date;
  const detailPath = isTV ? `/tv/${movie.id}` : `/movie/${movie.id}`;
  const rating = movie.vote_average?.toFixed(1);

  const toggleWatchlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInList) dispatch(removeFromWatchlist(movie.id));
    else dispatch(addToWatchlist({ ...movie, isTV }));
  };
  return (
    <Link to={detailPath} className="movie-card">
      <div className="card-poster">
        {movie.poster_path ? (
          <img src={imgUrl(movie.poster_path)} alt={title} loading="lazy" />
        ) : (
          <div className="no-poster">
            <span>🎬</span>
            <p>{title}</p>
          </div>
        )}
        <div className="card-overlay">
            <button
            className={`watchlist-btn ${isInList ? 'active' : ''}`}
            onClick={toggleWatchlist}
            title={isInList ? 'Listeden çıkar' : 'Listeye ekle'}
          >
            {isInList ? '✓' : '+'}
          </button>
        </div>
        {rating && (
            <div className="card-rating" style={{ color: ratingColor(parseFloat(rating)) }}>★ {rating}</div>
        )}
      </div>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <span className="card-year">{formatYear(date)}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
