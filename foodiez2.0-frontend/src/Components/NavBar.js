import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'


const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/saved-recipes">Saved Recipes</Link></li>
            {/* Add more links as needed */}
        </ul>
        </nav>
    </div>
  );
};

export default Navbar;

