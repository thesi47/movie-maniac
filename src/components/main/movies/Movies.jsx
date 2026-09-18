import React from 'react'
import Movie from '../movie/Movie'
import { useLoaderData } from 'react-router'

function Movies() {
  const movies = useLoaderData();
  console.log(movies);
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Movie movies={movies} />    
    </div>
  )
}

export default Movies