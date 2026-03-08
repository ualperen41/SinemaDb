import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { detailReducer } from "./detailReducer";

// We can add searchReducer, watchlistReducer etc. here later
const rootReducer = combineReducers({
  movies: moviesReducer,
  detail: detailReducer,
});

export default rootReducer;
