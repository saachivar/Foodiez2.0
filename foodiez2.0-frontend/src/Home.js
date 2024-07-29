import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './css/Home.css'


export default function Home() {

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
                      <textarea className="enter-ing-input" />
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
                      <input className="paste-link-input" type="text" />
                    </div>
                  </form>
                  <button type="button" style={{marginTop: '15px' }} >GET INGREDIENTS</button>
                </div>
              </div>
              <div className="bottom-half">
                  <div className="forms-on-bottom"> 
                    <form className='enter-ing-form'>
                      <div className="form-group enter-ing-form-input">
                        <label>Enter the name of your recipe:</label>
                        <input className="enter-ing-input" />
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
                    <button type="button" style={{marginBottom: '10px' }}>GET NUTRITION INFO</button>
                    <button type="button" style={{marginTop: '10px' }}>SAVE RECIPE</button>
                  </div>
              </div>
            </div>
          </div>
        </div>

  );
}