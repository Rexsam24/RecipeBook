import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
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
