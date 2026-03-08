import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import TvSeries from "./pages/TvSeries";
import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
        <Link to="/" style={{ marginRight: "1rem", color: "#fff" }}>
          Home
        </Link>
        <Link to="/tv" style={{ marginRight: "1rem", color: "#fff" }}>
          TV Series
        </Link>
        <Link to="/watchlist" style={{ marginRight: "1rem", color: "#fff" }}>
          Watchlist
        </Link>
      </nav>

      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv" element={<TvSeries />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
