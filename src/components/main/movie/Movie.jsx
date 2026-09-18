import React from "react";
import { Link } from "react-router";

function Movie({ movies }) {
  return movies.map((movie) => {
    return (
      <div
        key={movie.id}
        className="card bg-base-100 w-96 shadow-sm"
      >
        <figure>
          <img src={movie.image.medium} alt={movie.name} />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{movie.name}</h2>

          <div className="flex justify-center w-full gap-5">
            <p>⭐{movie.rating.average}</p>
            <p>📅{movie.premiered}</p>
          </div>

          <div className="card-actions justify-end">
            <Link
              to={`/movies/${movie.id}`}
              className="btn btn-primary"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    );
  });
}

export default Movie;