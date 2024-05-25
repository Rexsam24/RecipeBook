import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("createRecipe")) || [];
};

const initialState = {
  cartItems: getUserFromLocalStorage(),
};

const recipeSlice = createSlice({
  name: "receipe",
  initialState,
  reducers: {
    bookmark: (state, action) => {
      const { bookmark } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.idMeal === bookmark.idMeal
      );
      // Create a copy of the state for immutability
      const updatedCartItems = [...state.cartItems];

      if (itemIndex !== -1) {
        updatedCartItems[itemIndex] = bookmark; // Update existing item
      } else {
        updatedCartItems.push(bookmark); // Add new item
      }
      // Store the updated cart items in localStorage
      localStorage.setItem("createRecipe", JSON.stringify(updatedCartItems));
      // Return the new state object
      return {
        ...state,
        cartItems: updatedCartItems,
      };
      // Store the updated cart items in localStorage (consider using Redux Persist for this)
    },
    remove: (state, action) => {
      const { bookmark } = action.payload;
      console.log(bookmark);
      state.cartItems = state.cartItems.filter(
        (i) => i.idMeal !== bookmark.idMeal
      );
      localStorage.setItem("createRecipe", JSON.stringify(state.cartItems));
    },
    setCartItems: (state, action) => {
      const data = action.payload;
      console.log(data);
      state.cartItems = data;
    },
  },
});

export const { bookmark, remove, setCartItems } = recipeSlice.actions;

export default recipeSlice.reducer;
