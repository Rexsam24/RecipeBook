import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipe from "./pages/Recipe";
import Create from "./pages/Create";
import Bookmark from "./pages/Bookmark";
import HomeLayout from "./pages/HomeLayout";
import Error from "./pages/Error";
// import { Recipe, RecipeService } from './utils/lib/types';

//loaders
import { loader as recipeLoader } from "./utils/loaders/recipeLoader";
import { loader as singleLoader } from "./utils/loaders/singleLoader";
import SingleProductPage from "./pages/SingleProductPage";
import Products from "./pages/Products";
import actualRecipeService from './utils/services/actualRecipeService';
import mockRecipeService from './utils/services/mockRecipeService';


//service
const isMocked = import.meta.env.VITE_APP_USE_MOCK_SERVICE === 'true';
console.log(isMocked)
const recipeService = isMocked ? mockRecipeService : actualRecipeService 



//Routers 
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Recipe />,
        loader:() => recipeService.getDefaultRecipes(),
      },

      {
        path: "create",
        element: <Create />,
      },
      {
        path: "products",
        element: <Products />,
      },

      {
        path: "products/:id",
        element: <SingleProductPage />,
        loader: async ({ params }) => {
          const { id } = params;
          if (id) {
            return await recipeService.getRecipeById(id);
          }
        },
      },
      {
        path: "bookmark",
        element: <Bookmark />,
      },
      {
        path: "bookmark/products/:id",
        element: <SingleProductPage />,
        loader: async ({ params }) => {
          const { id } = params;
          if (id) {
            return await recipeService.getRecipeById(id);
          }
        },
      },
    ],
  },
]);

function App() { 
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
