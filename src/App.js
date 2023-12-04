import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FoodList from './components/FoodList';
import FoodDetails from './components/FoodDetails';
import FoodRecipe from './components/FoodRecipe';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<FoodList />} />
      <Route exact path="/food/:id" element={<FoodDetails />} />
      <Route exact path="/food/:id/recipe" element={<FoodRecipe />} />
      <Route path="*"></Route>
    </Routes>
  );
};

export default App;
