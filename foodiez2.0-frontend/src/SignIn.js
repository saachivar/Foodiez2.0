
import './css/SignIn.css'
import React, { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Sign-in failed');
      
      const data = await response.json();
      onSignIn(data); // Handle sign-in success, e.g., save token or user info
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-in-container">
        <div className="sign-in-box">
            Sign In
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
  );
};

export default SignIn;
