import React from 'react'
import Movie from '../movie/Movie'
import { useLoaderData } from 'react-router'

function Movies() {
  const movies = useLoaderData();
  console.log(movies);
  return (
    <>
        <Movie movies={movies} />    
    </>
  )
}

export default Movies