import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Menu/style.css';

const Menu = () => {
  const activeMenu = ({ isActive }) => isActive ? 'active' : '';
  return (
    <>
      <ul className="menu">
        <li>
          <NavLink className={activeMenu} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={activeMenu} to="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink className={activeMenu} to="/articles">Articles</NavLink>
        </li>
        <li>
          <NavLink className={activeMenu} to="/movies">Movies</NavLink>
        </li>
      </ul>
    </>

  );
}

export default Menu;