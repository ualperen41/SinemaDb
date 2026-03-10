import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  backdropUrl,
  imgUrl,
  ratingColor,
  formatRuntime,
  formatDate,
} from "../utils/helpers.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  fetchMovieDetail,
  removeFromWatchlist,
} from "../actions/movieActions";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie, loading, error } = useSelector((s) => s.detail);
  const watchlist = useSelector((s) => s.watchlist.items);
  const isInList = watchlist.some((m) => m.id === parseInt(id));

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (loading || !movie) return <Loader />;
  if (error) return <div className="error-page">⚠ {error}</div>;

  const toggleWatchlist = () => {
    if (isInList) dispatch(removeFromWatchlist(movie.id));
    else dispatch(addToWatchlist(movie));
  };
  return (
    <div className="detail-page">
      {backdropUrl(movie.backdrop_path) && (
        <div className="detail-backdrop">
          <img src={backdropUrl(movie.backdrop_path)} alt="" />
          <div className="backdrop-gradient" />
        </div>
      )}
      <div className="detail-container">
        <div className="detail-main">
          <div className="detail-poster">
            {movie.poster_path ? (
              <img src={imgUrl(movie.poster_path, "w400")} alt={movie.title} />
            ) : (
              <div className="no-poster-large">🎬</div>
            )}
          </div>

          <div className="detail-info">
            <div className="detail-genres">
              {movie.genres?.map((g) => (
                <span key={g.id} className="genre-tag">
                  {g.name}
                </span>
              ))}
            </div>

            <h1 className="detail-title">{movie.title || movie.name}</h1>

            {movie.tagline && (
              <p className="detail-tagline">"{movie.tagline}"</p>
            )}

            <div className="detail-stats">
              <div className="stat">
                <span className="stat-label">Puan</span>
                <span
                  className="stat-value"
                  style={{ color: ratingColor(movie.vote_average) }}
                >
                  ★ {movie.vote_average?.toFixed(1)}
                </span>
              </div>
              <div className="stat">
                <span className="stat-label">Süre</span>
                <span className="stat-value">
                  {formatRuntime(movie.runtime)}
                </span>
              </div>
              <div className="stat">
                <span className="stat-label">Çıkış</span>
                <span className="stat-value">
                  {formatDate(movie.release_date)}
                </span>
              </div>
            </div>

            <p className="detail-overview">
              {movie.overview || "Özet mevcut değil"}
            </p>

            <div className="detail-actions">
              <button
                className={`btn-watchlist ${isInList ? "in-list" : ""}`}
                onClick={toggleWatchlist}
              >
                {isInList ? "✓ Listede" : "+ İzleme Listesine Ekle"}
              </button>
              {movie.trailer && (
                <a
                  href={`https://www.youtube.com/watch?v=${movie.trailer.key}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-trailer"
                >
                  {" "}
                  ▶ Fragmanı İzle
                </a>
              )}
            </div>
          </div>
        </div>

        {movie.cast?.length > 0 && (
          <div className="cast-section">
            <h2>Oyuncular</h2>
            <div className="cast-list">
              {movie.cast.map((actor) => (
                <div key={actor.id} className="cast-card">
                  <div className="cast-photo">
                    {actor.profile_path ? (
                      <img
                        src={imgUrl(actor.profile_path, "w185")}
                        alt={actor.name}
                      />
                    ) : (
                      <div className="no-photo">👤</div>
                    )}
                  </div>
                  <p className="cast-name">{actor.name}</p>
                  <p className="cast-char">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {movie.similar?.length > 0 && (
          <div className="similar-section">
            <h2>Benzer Filmler</h2>
            <div className="movies-grid">
              {movie.similar.map((m) => (
                <MovieCard key={m.id} movie={m} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
