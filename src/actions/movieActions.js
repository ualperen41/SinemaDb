import axios from "axios";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAIL_REQUEST,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  CLEAR_SEARCH,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  FETCH_GENRES_SUCCESS,
  SET_ACTIVE_GENRE,
  FETCH_TVSHOWS_REQUEST,
  FETCH_TVSHOWS_SUCCESS,
  FETCH_TVSHOWS_FAILURE,
} from "./actionTypes.js";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const LANG = "tr-TR";

export const fetchMovies =
  (category = "popular", page = 1) =>
  async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=${LANG}&page=${page}`,
      );
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: { results: data.results, totalPages: data.total_pages, page },
      });
    } catch (error) {
      dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    }
  };

export const fetchMovieDetail = (id) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIE_DETAIL_REQUEST });
  try {
    const [detail, credits, videos, similar] = await Promise.all([
      axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANG}`),
      axios.get(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${LANG}`,
      ),
      axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
      ),
      axios.get(
        `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=${LANG}`,
      ),
    ]);
    dispatch({
      type: FETCH_MOVIE_DETAIL_SUCCESS,
      payload: {
        ...detail.data,
        cast: credits.data.cast.slice(0, 10),
        trailer: videos.data.results.find((v) => v.type === "Trailer"),
        similar: similar.data.results.slice(0, 6),
      },
    });
  } catch (error) {
    dispatch({ type: FETCH_MOVIE_DETAIL_FAILURE, payload: error.message });
  }
};

export const searchMovies = (query) => async (dispatch) => {
  if (!query.trim()) {
    dispatch({ type: CLEAR_SEARCH });
    return;
  }
  dispatch({ type: SEARCH_MOVIES_REQUEST });
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=${LANG}&query=${encodeURIComponent(query)}`,
    );
    dispatch({ type: SEARCH_MOVIES_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: SEARCH_MOVIES_FAILURE, payload: error.message });
  }
};

export const clearSearch = () => ({ type: CLEAR_SEARCH });

export const addToWatchlist = (movie) => ({
  type: ADD_TO_WATCHLIST,
  payload: movie,
});
export const removeFromWatchlist = (id) => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: id,
});

export const fetchGenres = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`,
    );
    dispatch({ type: FETCH_GENRES_SUCCESS, payload: data.genres });
  } catch (_) {}
};

export const setActiveGenre = (genreId) => ({
  type: SET_ACTIVE_GENRE,
  payload: genreId,
});

export const fetchTVShows =
  (category = "popular", page = 1) =>
  async (dispatch) => {
    dispatch({ type: FETCH_TVSHOWS_REQUEST });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/tv/${category}?api_key=${API_KEY}&language=${LANG}&page=${page}`,
      );
      dispatch({
        type: FETCH_TVSHOWS_SUCCESS,
        payload: { results: data.results, totalPages: data.total_pages, page },
      });
    } catch (error) {
      dispatch({ type: FETCH_TVSHOWS_FAILURE, payload: error.message });
    }
  };
