import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("createRecipe")) || [];
};

const initialState = {
  cartItems: getUserFromLocalStorage(),
  bookMarkedItems: [],
};

const recipeSlice = createSlice({
  name: "receipe",
  initialState,
  reducers: {
    bookmark: (state, action) => {
      const bookmarks = action.payload;
      state.bookMarkedItems = bookmarks;
    },
    setCartItems: (state, action) => {
      const data = action.payload;
      state.cartItems = data;
    },
  },
});

export const { bookmark, setCartItems } = recipeSlice.actions;

export default recipeSlice.reducer;
