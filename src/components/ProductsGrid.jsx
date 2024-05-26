import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { useDispatch } from "react-redux";
import { setCartItems } from "../features/recipe/recipeSlice";

const ProductsGrid = () => {
  const products = useLoaderData();
  const dispatch = useDispatch();
  dispatch(setCartItems(products));

  return (
    <div className="px-4  grid place-items-center md:grid-cols-2 lg:grid-cols-3">
      <RecipeCard />
    </div>
  );
};
export default ProductsGrid;
