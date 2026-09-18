import React from "react";
import Movie from "../movie/Movie";
import { useLoaderData, useSearchParams } from "react-router";

function Movies() {
  const movies = useLoaderData();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Movie movies={filteredMovies} />
    </div>
  );
}

export default Movies;