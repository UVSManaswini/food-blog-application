import axios from 'axios';

export const fetchFoods = () => {
  return dispatch => {
    return axios.get('http://localhost:3001/foods')
      .then(response => {
        dispatch({ type: 'FOODS_FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        // Handle error
      });
  };
};

export const fetchFoodDetails = id => {
  return dispatch => {
    return axios.get(`http://localhost:3001/foods/${id}`)
      .then(response => {
        dispatch({ type: 'FOOD_DETAILS_FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        // Handle error
      });
  };
};

export const fetchFoodRecipe = id => {
  return dispatch => {
    return axios.get(`http://localhost:3001/foods/${id}`)
      .then(response => {
        dispatch({ type: 'FOOD_RECIPE_FETCH_SUCCESS', payload: response.data.recipe });
      })
      .catch(error => {
        // Handle error
      });
  };
};



