
import './css/SignIn.css'
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import { useNavigate } from 'react-router-dom';
  

const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  
  function InvalidCredentials(isInvalid) {
    if (isInvalid) {
      return (
        <div className="invalidBox">
          <p>Your credentials are invalid. Please try again. </p>
        </div>
      )
    }
  }

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,  password }),
      });

      if (!response.ok) throw new Error('Sign-in failed');
      
      const data = await response.json();
      console.log(data);
      if (data.message === "Invalid credentials") {
        setIsInvalid(true)
      } else {
        setIsInvalid(false)
        console.log(data.message)
        navigate("/saved-recipes")
      }
      //onSignIn(data); // Handle sign-in success, e.g., save token or user info
    } catch (error) {
        alert("No account found. Sign up instead!");
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
          <InvalidCredentials isInvalid={isInvalid} />
      </div>
      
    </div>
  );
};

export default SignIn;
