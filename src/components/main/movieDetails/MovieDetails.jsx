import React from "react";
import { useLoaderData, useNavigate } from "react-router";

function MovieDetails() {
  const movie = useLoaderData();
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={() => navigate("/movies")}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={() => navigate("/movies")}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-3 py-2 text-xl text-white hover:bg-black"
        >
          ✕
        </button>

        <div className="bg-black">
          <img
            src={movie.image?.original || movie.image?.medium}
            alt={movie.name}
            className="mx-auto max-h-112.5 w-full object-contain"
          />
        </div>

        <div className="p-6 text-gray-900">

          <h2 className="text-3xl font-bold">
            {movie.name}
          </h2>

          <div className="mt-3 flex flex-wrap gap-6 text-gray-700">
            <span>
              ⭐ Rating: {movie.rating?.average || "N/A"}
            </span>

            <span>
              📅 Release: {movie.premiered || "N/A"}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="mb-2 text-lg font-bold text-gray-900">
              Overview
            </h3>

            <div
              className="leading-7 text-gray-700"
              dangerouslySetInnerHTML={{
                __html:
                  movie.summary || "No description available.",
              }}
            />
          </div>

          <button
            onClick={() => navigate("/movies")}
            className="mt-6 rounded-lg bg-red-500 px-5 py-2 font-medium text-white hover:bg-red-600"
          >
            ✕ Close
          </button>

        </div>
      </div>
    </div>
  );
}

export default MovieDetails;