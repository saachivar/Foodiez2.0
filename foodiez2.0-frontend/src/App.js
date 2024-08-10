import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Home.js';
import SavedRecipes from './SavedRecipes.js'
import Background from './Background.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      children: [
        { path: '/', element: <Home /> },
        { path: '/saved-recipes', element: <SavedRecipes /> },
        { path: '/sign-in', element: <SignIn />},
        { path: '/sign-up', element: <SignUp />}
      ]
    }
  ]);

  return (
    <div>
      <Background />
      {routes}
    </div>

  );
};

export default App;