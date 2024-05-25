import axios from "axios";

const productionUrl = " https://www.themealdb.com/api/json/v1/1";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
