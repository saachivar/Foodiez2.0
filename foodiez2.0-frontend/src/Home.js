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
                    <div className="form-group">
                      <label>Enter the ingredients to your custom recipe:</label>
                      <input type="text" />
                    </div>
                  </form>
                </div>
                <div className='or'>
                  OR
                </div>
                <div className='paste-link'>
                  <form>
                    <div className="form-group">
                      <label>Paste a link to a recipe here:</label>
                      <input type="text" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

  );
}