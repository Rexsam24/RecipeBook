import axios from "axios";
// import { customFetch } from "..";

// src/utils/loader.js

export const loader = async ({ searchQuery }) => {
  // console.log("Query:", searchQuery);
  const response = await axios(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
  );
  const data = await response.data.meals;
  return data;
};
// Use the searchQuery for data fetching or pre-rendering logic

// Return any data or null if not ready
