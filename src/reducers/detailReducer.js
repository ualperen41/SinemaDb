import {
  FETCH_MOVIE_DETAIL_REQUEST,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_FAILURE,
} from "../actions/actionTypes.js";

const initialState = {
  movie: null,
  loading: false,
  error: null,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL_REQUEST:
      return { ...state, loading: true, error: null, movie: null };
    case FETCH_MOVIE_DETAIL_SUCCESS:
      return { ...state, loading: false, movie: action.payload };
    case FETCH_MOVIE_DETAIL_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default detailReducer;
