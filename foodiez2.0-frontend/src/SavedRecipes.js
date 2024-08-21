import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { useState, useEffect } from 'react';

export default function SavedRecipes() {
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
    <div className='Home'>
      <NavBar />
      {(isLoggedIn === false) ? (
        <p>Please log in to see your recipes!</p>
      ) : (
        <p>Welcome, {username}!</p>
      )}
    </div>
  );
}
