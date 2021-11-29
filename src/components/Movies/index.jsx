import React from 'react';
import MovieList from '../MovieList';
import { Outlet } from 'react-router-dom';
import '../../components/Movies/style.css'


const Movies = () => {
  return (

    <>
      <h2>Filmy</h2>
      <p>V kinech právě hrají:</p>
      <div className="movies">
        <MovieList />
        <Outlet />
      </div>
    </>

  );
}

export default Movies;