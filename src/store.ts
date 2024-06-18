import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./features/recipe/recipeSlice";

export const store = configureStore({
  reducer: {
    recipeState: recipeReducer,
  },
});
 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;