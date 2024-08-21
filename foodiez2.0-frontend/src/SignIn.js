import './css/SignIn.css'
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import { useNavigate } from 'react-router-dom';
  

const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/signin', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
  
      if (data.message === "Sign-in successful") {
        console.log(data.message);
        navigate("/saved-recipes");
      } else {
        console.log(data.message);
        alert("Your credentials are invalid. Please try again.")
      }
  
    } catch (error) {
      console.log(error);
      alert("It seems you don't have an account. Sign up for one!");
      navigate("/sign-up");
    }
  };
  
  return (
    <div>
      <NavBar />
      <div className="sign-in-container">
          <div className="sign-in-box">
              <h2>Sign In</h2>
              <input
                  type="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleSignIn}>Sign In</button>
          </div>
          
      </div>
      
    </div>
  );
};

export default SignIn;
