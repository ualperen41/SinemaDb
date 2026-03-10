import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from "../actions/actionTypes.js";

const saved = localStorage.getItem("watchlist");
const initialState = { items: saved ? JSON.parse(saved) : [] };

const watchlistReducer = (state = initialState, action) => {
  let newItems;
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      if (state.items.find((m) => m.id === action.payload.id)) return state;
      newItems = [...state.items, action.payload];
      localStorage.setItem("watchlist", JSON.stringify(newItems));
      return { ...state, items: newItems };
    case REMOVE_FROM_WATCHLIST:
      newItems = state.items.filter((m) => m.id !== action.payload);
      localStorage.setItem("watchlist", JSON.stringify(newItems));
      return { ...state, items: newItems };
    default:
      return state;
  }
};

export default watchlistReducer;
