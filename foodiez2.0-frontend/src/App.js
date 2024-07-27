import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Home.js';
import SavedRecipes from './SavedRecipes.js'
import Background from './Background.js';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      children: [
        { path: '/', element: <Home /> },
        { path: '/saved-recipes', element: <SavedRecipes /> },
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