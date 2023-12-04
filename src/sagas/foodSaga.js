import { put, takeLatest, all, call } from 'redux-saga/effects';
import { fetchFoods, fetchFoodDetails, fetchFoodRecipe } from '../actions/foodActions';

function* fetchFoodsSaga() {
  try {
    const response = yield call(fetchFoods);
    yield put({ type: 'FOODS_FETCH_SUCCESS', payload: response.data });
  } catch (error) {
    // Handle error
  }
}

function* fetchFoodDetailsSaga(action) {
  try {
    const response = yield call(fetchFoodDetails, action.payload);
    yield put({ type: 'FOOD_DETAILS_FETCH_SUCCESS', payload: response.data });
  } catch (error) {
    // Handle error
  }
}

function* fetchFoodRecipeSaga(action) {
  try {
    const response = yield call(fetchFoodRecipe, action.payload);
    yield put({ type: 'FOOD_RECIPE_FETCH_SUCCESS', payload: response });
  } catch (error) {
    // Handle error
  }
}


function* watchFoodSaga() {
  yield takeLatest('FOODS_FETCH', fetchFoodsSaga);
  yield takeLatest('FOOD_DETAILS_FETCH', fetchFoodDetailsSaga);
  yield takeLatest('FOOD_RECIPE_FETCH', fetchFoodRecipeSaga);
}

export default function* rootSaga() {
  yield all([watchFoodSaga()]);
}
