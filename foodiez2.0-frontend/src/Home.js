import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar';


export default function Home() {

  return (
        <div className='Home'>
        <NavBar />
          <div className='Intro'>
            <div className='Welcome'>
            </div>
            <div className='Desc'>
            </div>
          </div>
          <div className='Disclaimer'>
            <p>
            </p>
          </div>
        </div>

  );
}