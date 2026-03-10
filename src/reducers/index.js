import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer.js";
import detailReducer from "./detailReducer.js";
import searchReducer from "./searchReducer.js";
import watchlistReducer from "./watchlistReducer.js";
import genreReducer from "./genreReducer.js";

const rootReducer = combineReducers({
  movies: moviesReducer,
  detail: detailReducer,
  search: searchReducer,
  watchlist: watchlistReducer,
  genres: genreReducer,
});

export default rootReducer;
