import axios from "axios";

export const loader = async ({ searchQuery }) => {
  const response = await axios(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
  );
  const data = await response.data.meals;
  return data;
};
