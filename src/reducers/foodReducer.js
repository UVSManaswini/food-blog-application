const initialState = {
  foods: [],
  food: {},
  recipe: {},
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOODS_FETCH_SUCCESS':
      return {
        ...state,
        foods: action.payload,
      };
    case 'FOOD_DETAILS_FETCH_SUCCESS':
      return {
        ...state,
        food: action.payload,
      };
    case 'FOOD_RECIPE_FETCH_SUCCESS':
      return {
        ...state,
        recipe: action.payload,
      };
    default:
      return state;
  }
};

export default foodReducer;
