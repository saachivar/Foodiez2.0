import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/is-signed-in', {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',  // Include credentials (cookies) in the request
        });
        const data = await response.json();
        console.log(data);
        setIsLoggedIn(data.isLoggedIn);
        if (data.isLoggedIn) {
          setUsername(data.username);  // Save the username if logged in
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkLoginStatus();
  }, []);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="navbar-brand">foodiez</div>
        {(isLoggedIn === false) ? (
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Create New Recipe</Link>
          </li>
          <li className="nav-item">
            <Link to="/saved-recipes" className="nav-link">Saved Recipes</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-in" className="nav-link">Sign In</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
        ) : (
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Create New Recipe</Link>
          </li>
          <li className="nav-item">
            <Link to="/saved-recipes" className="nav-link">Saved Recipes</Link>
          </li>
          <li className="nav-item">
          <Link to="/log-out" className="nav-link">{username}</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
        )}
        
      </nav>
    </div>
  );
};

export default Navbar;

