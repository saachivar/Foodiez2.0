
import './css/SignIn.css'
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onSignUp }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogOut = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Sign-in failed');
      
      const data = await response.json();
      console.log(data)
      if (data.message === "Sign-out successful") {
        navigate("/");
      } else {
        alert("Log out failed.")
      }
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
              <button onClick={handleLogOut}>Log Out</button>
          </div>
      </div>
    </div>
  );
};

export default Logout;
