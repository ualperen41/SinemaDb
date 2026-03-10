import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import TVShows from "./pages/TvSeries.jsx";
import SearchPage from "./pages/Search.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/tv" element={<TVShows />} />
              <Route path="/tv/:id" element={<MovieDetail />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
          </main>
          <footer className="footer">
            <p>SinemaDB — TMDB API ile güçlendirilmiştir</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
