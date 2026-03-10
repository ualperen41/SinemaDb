import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_TVSHOWS_REQUEST,
  FETCH_TVSHOWS_SUCCESS,
  FETCH_TVSHOWS_FAILURE,
} from "../actions/actionTypes.js";

const initialState = {
  movies: [],
  tvShows: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
    case FETCH_TVSHOWS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies:
          action.payload.page === 1
            ? action.payload.results
            : [...state.movies, ...action.payload.results],
        totalPages: action.payload.totalPages,
        currentPage: action.payload.page,
      };

    case FETCH_TVSHOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        tvShows:
          action.payload.page === 1
            ? action.payload.results
            : [...state.tvShows, ...action.payload.results],
        totalPages: action.payload.totalPages,
        currentPage: action.payload.page,
      };

    case FETCH_MOVIES_FAILURE:
    case FETCH_TVSHOWS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default moviesReducer;
