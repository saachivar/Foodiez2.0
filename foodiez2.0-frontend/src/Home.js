import { useState, useEffect } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate if needed
import NavBar from './Components/NavBar';
import './css/Home.css'


export default function Home() {
  const [ingredients, setIngredients] = useState('');
  const [recipeLink, setRecipeLink] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [nutritionInfo, setNutritionInfo] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate if needed
  const sendRecipeLink = () => {
    if (recipeLink === '') {
      alert("Please input a link to a recipe!");
    } else {

      fetch('http://127.0.0.1:5000/ingredients', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeLink),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          // Join the array elements with a newline character
          setIngredients(data.join('\n'));
        } else {
          alert('Failed to get ingredients');
        }
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      }); 
    }
  };
  const sendIngredients = () => {
    if (ingredients === '') {
      alert("Please input some ingredients!");
    } else {

      fetch('http://127.0.0.1:5000/nutrition', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredients),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNutritionInfo(data)
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      }); 
    }
  };


  return (
        <div>
        <NavBar />
          <div className='home-container'>
            <div className='home'>
              <div className='top-half'>
                <div className='enter-ing'>
                  <form className='enter-ing-form'>
                    <div className="form-group enter-ing-form-input">
                      <label>Enter the ingredients to your custom recipe:</label>
                      <textarea
                        placeholder="Put each ingredient on a new line and format it like: 3 cups flour"
                        className="enter-ing-input"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className='or'>
                  OR
                </div>
                <div className='paste-link'>
                  <form>
                    <div className="form-group paste-link-form">
                      <label>Paste a link to a recipe here:</label>
                      <input
                        className="paste-link-input"
                        type="text"
                        value={recipeLink}
                        onChange={(e) => setRecipeLink(e.target.value)}
                      />
                    </div>
                  </form>
                  <button onClick={sendRecipeLink} type="button" style={{marginTop: '15px' }} >GET INGREDIENTS</button>
                </div>
              </div>
              <div className="bottom-half">
                  <div className="forms-on-bottom"> 
                    <form className='enter-ing-form'>
                      <div className="form-group enter-ing-form-input">
                        <label>Enter the name of your recipe:</label>
                        <input placeholder="Ex: My rad chocolate fudge cookies" className="enter-ing-input" />
                      </div>
                    </form>
                    <form className='enter-ing-form' style={{marginTop: '20px' }}>
                      <div className="form-group enter-ing-form-input">
                        <label>Write down your recipe here!:</label>
                        <label style={{fontSize: '15px', marginTop: '-10px' }}>(or any notes about your recipe if you copied a link)</label>
                        <textarea className="enter-ing-input" />
                      </div>
                    </form>
                  </div>
                  <div className="buttons">
                    <button onClick={sendIngredients} type="button" style={{marginBottom: '10px' }}>GET NUTRITION INFO</button>
                    <button type="button" style={{marginTop: '10px' }}>SAVE RECIPE</button>
                  </div>
                  <div className="nutrition">
                    <div className="label"> Nutrition info will appear here:</div>
                    <div className="nutrition-info">
                      {Object.keys(nutritionInfo).length === 0 ? (
                        <p>Press the GET NUTRITION INFO button after you input your ingredients! </p>
                      ) : (
                        <div>
                          <pre>{nutritionInfo}</pre>
                        </div>
                      )}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

  );
}