import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchFoodRecipe } from '../actions/foodActions';

const FoodRecipe = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const foods = useSelector(state => state.foods);
  const recipe = foods.find(food => food.id === parseInt(id))?.recipe[0];

  useEffect(() => {
    dispatch(fetchFoodRecipe(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Food Recipe</h1>
      {recipe && (
        <>
          <h3>{recipe.title}</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.instructions}</p>
        </>
      )}
    </div>
  );
};

export default FoodRecipe;
