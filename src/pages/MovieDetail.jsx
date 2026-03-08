import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  return (
    <div className="page movie-detail">
      <h1>Film Detay</h1>
      <p>Film ID: {id}</p>
      <p>Detaylı film bilgisi burada yer alacak.</p>
    </div>
  );
};

export default MovieDetail;
