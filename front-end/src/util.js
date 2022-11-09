import axios from 'axios';

type CallbackType = (p1: Array) => void;
type Props = Int;

const BASE_API_URL = `${process.env.REACT_APP_API_BASE}:${process.env.REACT_APP_API_PORT || 3000}`;

async function fetchRecipeData(callback: CallbackType) {
  const result = await axios(
    `${BASE_API_URL}/rgapi/recipe/all`,
  ).catch((err) => console.log(err.message));
  if (result && Array.isArray(result.data)) {
    callback(result.data);
  }
}

async function fetchIngredientData(callback: CallbackType) {
  const result = await axios(
    `${BASE_API_URL}/rgapi/ingredients/all`,
  ).catch((err) => console.log(err.message));
  console.log('Ingredient api result', result);
  if (result && Array.isArray(result.data)) {
    callback(result.data);
  }
}

async function fetchReviewData(callback: CallbackType, props: Props) {
  console.log(props);
  const url = `${BASE_API_URL}/rgapi/review/review/`;
  const fullUrl = url.concat('', props);
  let result = await axios.get(
    fullUrl,
  ).catch((err) => console.log(err.message));
  console.log(result);
  if (result && Array.isArray(result.data.reviews)) {
    console.log('Got review data', result.data.reviews);
    callback(result.data.reviews);
  } else {
    result = await axios('https://raw.githubusercontent.com/geontackee/sample_reviews/main/Reviews.json');
    callback(result.data);
  }
}

async function fetchMyRecipes(callback: CallbackType) {
  // need to change this after backend is done
  const result = await axios(
    `${BASE_API_URL}/rgapi/user/myrecipe`,
  ).catch((err) => console.log(err.message));
  console.log('MY RECIPES', result);
  if (result && Array.isArray(result.data)) {
    console.log('Got review data', result.data);
    callback(result.data);
  }
}

export {
  fetchRecipeData,
  fetchIngredientData,
  fetchReviewData,
  fetchMyRecipes,
};
export default {
  fetchRecipeData,
  fetchIngredientData,
  fetchReviewData,
  fetchMyRecipes,
};
