import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchFoodDetails } from '../actions/foodActions';

const FoodDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const food = useSelector(state => state.food);

  useEffect(() => {
    dispatch(fetchFoodDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Food Details</h1>
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <Link to={`/food/${id}/recipe`}>Recipe</Link>
    </div>
  );
};

export default FoodDetails;
