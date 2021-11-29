import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Movie from './components/Movie';
import Menu from './components/Menu';
import Home from './components/Home';
import Articles from './components/Articles';
import Reviews from './components/Reviews';
import Movies from './components/Movies';
import NoMovies from './components/NoMovies';
import movies from './movies.js';

import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/" element={<Articles />} />
        <Route path="/reviews/" element={<Reviews />} />
        <Route path="/movies/" element={<Movies />} >
          <Route index element={<Navigate to="/movies/1" replace={true} />} />
          <Route path=":id" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
