import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  movie: null,
  isLoading: false,
  error: null,
};

export const detailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DETAIL_START:
      return { ...state, isLoading: true, error: null };
    case ActionTypes.FETCH_DETAIL_SUCCESS:
      return { ...state, isLoading: false, movie: payload };
    case ActionTypes.FETCH_DETAIL_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
