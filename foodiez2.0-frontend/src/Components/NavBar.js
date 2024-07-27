import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/saved-recipes">Saved Recipes</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;

