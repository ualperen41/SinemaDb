import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_MOVIES_START:
      return { ...state, isLoading: true, error: null };
    case ActionTypes.FETCH_MOVIES_SUCCESS:
      return { ...state, isLoading: false, movies: payload };
    case ActionTypes.FETCH_MOVIES_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
