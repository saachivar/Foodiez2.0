import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'


const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="navbar-brand">foodiez</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/saved-recipes" className="nav-link">Saved Recipes</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-in" className="nav-link">Sign In</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

