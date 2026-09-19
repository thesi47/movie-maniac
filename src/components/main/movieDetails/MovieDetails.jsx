import React from "react";
import { useLoaderData, useNavigate } from "react-router";
function MovieDetails() {
  const movie = useLoaderData();
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/movies");
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4"
      onClick={closeModal}
    >
      
      <div
        className="relative flex h-[98vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/80 text-xl text-white shadow-lg hover:bg-black"
        >
          
          ✕
        </button>
        {/* Image */}
        <div className="flex shrink-0 items-center justify-center bg-black">
          
          <img
            src={movie.image?.original || movie.image?.medium}
            alt={movie.name}
            className="h-[38vh] w-full object-contain sm:h-[50vh]"
          />
        </div>
        {/* Details */}
        <div className="flex-1 overflow-hidden p-4 text-gray-900 sm:p-6">
          
          <h2 className="text-2xl font-bold sm:text-3xl">
            
            {movie.name}
          </h2>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-700 sm:mt-3 sm:text-base">
            
            <span> ⭐ Rating: {movie.rating?.average || "N/A"} </span>
            <span> 📅 Release: {movie.premiered || "N/A"} </span>
          </div>
          {/* Genres */}
          <div className="mt-3 flex flex-wrap gap-2">
            
            {movie.genres?.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800 sm:text-sm"
              >
                
                {genre}
              </span>
            ))}
          </div>
          {/* Overview */}
          <div className="mt-4">
            
            <h3 className="mb-1 text-lg font-bold"> Overview </h3>
            <div
              className="line-clamp-4 text-sm leading-6 text-gray-700 sm:line-clamp-6 sm:text-base sm:leading-7"
              dangerouslySetInnerHTML={{
                __html: movie.summary || "No description available.",
              }}
            />
          </div>
          {/* Close */}
          <button
            onClick={closeModal}
            className="mt-4 w-full cursor-pointer rounded-lg bg-red-500 px-5 py-2 font-medium text-white hover:bg-red-600 sm:w-auto"
          >
            
            ✕ Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
