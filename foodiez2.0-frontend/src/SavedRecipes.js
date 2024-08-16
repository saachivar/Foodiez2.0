import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar';

export default function SavedRecipes() {
const isLoggedIn = () => {
  try {
    const response = fetch('http://127.0.0.1:5000/user-recipes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    const data = response.json()
    return data;
  } catch (error) {
    console.log(error)
  }
}
  return (
        <div className='Home'>
            <NavBar />
            {(isLoggedIn === "False") ? (
              <p>Log in to see your recipes.</p>
            ) : (
              <p>Welcome {isLoggedIn} </p>
            )}
        </div>

  );
}