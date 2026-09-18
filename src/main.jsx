import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root.jsx';
import Home from './components/main/Home.jsx';
import Movies from './components/main/movies/Movies.jsx';
import MovieDetails from './components/main/movieDetails/MovieDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: "/movies",
          loader: () => fetch("https://api.tvmaze.com/shows"),
          Component: Movies
        },
        {
          path: "/movies/:mid",
          loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.mid}`),
          Component: MovieDetails
        }


      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
