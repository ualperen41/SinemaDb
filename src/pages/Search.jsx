import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  return (
    <div className="page search">
      <h1>Arama Sonuçları</h1>
      <p>Aranan Kelime: {query}</p>
    </div>
  );
};

export default Search;
