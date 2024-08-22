import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { useState, useEffect } from 'react';
import './css/SavedRecipes.css';

export default function SavedRecipes() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [username, setUsername] = useState('');
  const [recipes, setRecipes] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/is-signed-in', {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const data = await response.json();
        console.log(data);
        setIsLoggedIn(data.isLoggedIn);
        if (data.isLoggedIn) {
          setUsername(data.username);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    const getSavedRecipes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/get-saved-recipes', {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const data = await response.json();
        console.log(data);
        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSavedRecipes();
  }, []);

  const RecipesList = ({ recipes }) => {
    if (!Array.isArray(recipes)) {
      return <p>No recipes to display.</p>;
    }

    return (
      <div>
        {recipes.map((recipe, index) => (
          <div key={recipe._id || index}>
            <h3>{recipe.recipeName}</h3>
            <p><strong>Link:</strong> {recipe.recipeLink}</p>
            <p><strong>Description:</strong> {recipe.recipeDescription}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Nutrition Info:</strong> {recipe.nutritionInfo}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <NavBar />    
      <div className='saved-container'>
        <div className='intro'>
          {(isLoggedIn === false) ? (
            <p>Please log in to see your recipes!</p>
          ) : (
            <p>Welcome, {username}! Here are your recipes:</p>
          )}
        </div>
        <div className='recipes-container'>
          <RecipesList recipes={recipes} />
        </div>
      </div>
    </div>
  );
}
