import { customFetch } from "../index";

const url = "/search.php?f=a";

export const loader = async () => {
  const response = await customFetch(url);
  const finaldata = response.data.meals;
  const data = finaldata.slice(0, 3);
  return data;
};
