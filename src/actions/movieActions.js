import axios from "axios";
import { ActionTypes } from "./actionTypes";

// TMDB API instance (base setup)
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY, // Vite uses import.meta.env
  },
});

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_MOVIES_START });
  try {
    const res = await api.get("/movie/popular");
    dispatch({
      type: ActionTypes.FETCH_MOVIES_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({ type: ActionTypes.FETCH_MOVIES_ERROR, payload: err.message });
  }
};

export const fetchMovieDetail = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_DETAIL_START });
  try {
    const res = await api.get(`/movie/${id}`);
    dispatch({ type: ActionTypes.FETCH_DETAIL_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ActionTypes.FETCH_DETAIL_ERROR, payload: err.message });
  }
};

// ... other actions can be added here as the app grows
