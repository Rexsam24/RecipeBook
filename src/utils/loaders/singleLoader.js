import { customFetch } from "../index";

export const loader = async ({ params }) => {
  const response = await customFetch(`/lookup.php?i=${params.id}`);
  const data = response.data.meals;
  return data;
};
