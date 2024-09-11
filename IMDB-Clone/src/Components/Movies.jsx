import React from "react";
import MovieCard from "./MovieCard";

const Movies = () => {
  return (
    <div className="p-5">
      <div className="text-xl m-4 font-bold text-center">
        Trending Movies
      </div>
      <div>
        <MovieCard/>
      </div>
    </div>
  );
};

export default Movies;
