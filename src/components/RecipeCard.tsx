import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCartItems, bookmark } from "../features/recipe/recipeSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import React from 'react';
import { RootState, AppDispatch } from '../store'; 
import { Recipe } from "../utils/lib/types";

const RecipeCard = () => { 
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.recipeState.cartItems) || [];
  const bookMarkedItems = useSelector(
    (state: RootState) => state.recipeState.bookMarkedItems
  );
  useEffect(() => {
    const updatedProducts = products.map((product) => {
      const isBookmarked = bookMarkedItems.some(
        (item) => item.idMeal === product.idMeal
      );
      return { ...product, isBookmarked };
    });
    dispatch(setCartItems(updatedProducts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookMarkedItems, dispatch]);

  const handleBookmarkToggle = (bookmarkdataArg:Recipe) => {
    const isCurrentlyBookmarked = bookMarkedItems.some(
      (obj) => obj.idMeal === bookmarkdataArg.idMeal
    );

    if (isCurrentlyBookmarked) {
      const updatedBookmarks = bookMarkedItems.filter(
        (item) => item.idMeal !== bookmarkdataArg.idMeal
      );
      dispatch(bookmark(updatedBookmarks));
      toast.success("Bookmark removed");
    } else {
      const bookmarkdata = {
        ...bookmarkdataArg,
        isBookmarked: true,
      } as Recipe;
      dispatch(bookmark([...bookMarkedItems, bookmarkdata]));
      toast.success("Bookmarked successfully");
    }

    const updatedProducts = products.map((item) =>
      item.idMeal === bookmarkdataArg.idMeal
        ? { ...item, isBookmarked: !isCurrentlyBookmarked }
        : item
    );
    dispatch(setCartItems(updatedProducts));
  };
  return (
    <>
      {products.map((item) => {
        const { idMeal, strMeal, strCategory, strMealThumb, isBookmarked } =
          item;
        const bookmark = {
          idMeal,
          strMeal,
          strCategory,
          strMealThumb,
          isBookmarked: isBookmarked || false,
        } as Recipe;
        return (
          <div key={idMeal} className="py-4 ">
            <div className="card w-72 hover:drop-shadow-xl bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-lg h-20">{strMeal}</h2>
                <p className="text-lg mb-2">{strCategory}</p>

                <div className="flex flex-row gap-2">
                  <Link to={`products/${idMeal}`}>
                    <div className="card-actions">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </Link>
                  <button
                    className="btn w-16 "
                    onClick={() => handleBookmarkToggle(bookmark)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill={bookmark.isBookmarked ? "red" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default RecipeCard;
