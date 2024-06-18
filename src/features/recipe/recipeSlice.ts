import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Recipe, RecipeState } from "../../utils/lib/types";


const initialState : RecipeState = {
  cartItems: [],
  bookMarkedItems: [],
};
 
const recipeSlice = createSlice({
  name: "receipe",
  initialState, 
  reducers: { 
    bookmark: (state, action: PayloadAction<Recipe[]>) => {
      const bookmarks = action.payload;
      state.bookMarkedItems = bookmarks;
    },
    setCartItems: (state, action: PayloadAction<Recipe[]>) => {
      const data = action.payload;
      state.cartItems = data;
    },
  },
});

export const { bookmark, setCartItems } = recipeSlice.actions;

export default recipeSlice.reducer;
