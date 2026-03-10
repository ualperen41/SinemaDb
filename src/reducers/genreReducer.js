import {
  FETCH_GENRES_SUCCESS,
  SET_ACTIVE_GENRE,
} from "../actions/actionTypes.js";

const initialState = { list: [], activeGenre: null };

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      return { ...state, list: action.payload };
    case SET_ACTIVE_GENRE:
      return { ...state, activeGenre: action.payload };
    default:
      return state;
  }
};

export default genreReducer;
