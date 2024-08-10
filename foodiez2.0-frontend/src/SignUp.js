
import './css/SignIn.css'
import React, { useState } from 'react';
import NavBar from './Components/NavBar';

const SignUp = ({ onSignUp }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,  password }),
      });

      if (!response.ok) throw new Error('Sign-in failed');
      
      const data = await response.json();
      console.log(data)
      //onSignUp(data); // Handle sign-in success, e.g., save token or user info
    } catch (error) {
        console.log(error)
      alert("No account found. Sign up here!")
    }
  };

  return (
    <div>
      <NavBar />
      <div className="sign-in-container">
          <div className="sign-in-box">
              <h2>Sign Up</h2>
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
              <button onClick={handleSignUp}>Create Account</button>
          </div>
      </div>
    </div>
  );
};

export default SignUp;
