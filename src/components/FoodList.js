import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFoods } from '../actions/foodActions';

const FoodList = () => {
  const dispatch = useDispatch();
  const foods = useSelector(state => state.foods);

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  return (
    <div>
      <h1>Food List</h1>
      {foods.map(food => (
        <div key={food.id}>
          <h3>{food.name}</h3>
          <Link to={`/food/${food.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
