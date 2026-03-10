import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  CLEAR_SEARCH,
} from "../actions/actionTypes.js";

const initialState = {
  results: [],
  loading: false,
  error: null,
  query: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
    case SEARCH_MOVIES_SUCCESS:
      return { ...state, loading: false, results: action.payload };
    case SEARCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_SEARCH:
      return initialState;
    default:
      return state;
  }
};

export default searchReducer;
