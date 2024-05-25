import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipe from "./pages/Recipe";
import Create from "./pages/Create";
import Bookmark from "./pages/Bookmark";
import HomeLayout from "./pages/HomeLayout";
import Error from "./pages/Error";

//loaders
import { loader as recipeLoader } from "../src/utils/loaders/recipeLoader";
import { loader as singleLoader } from "../src/utils/loaders/singleLoader";
import { loader as productsLoader } from "../src/utils/loaders/productsLoader";
import SingleProductPage from "./pages/SingleProductPage";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Recipe />,
        loader: recipeLoader,
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
        loader: singleLoader,
      },
      {
        path: "bookmark",
        element: <Bookmark />,
      },
      {
        path: "bookmark/products/:id",
        element: <SingleProductPage />,
        loader: singleLoader,
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
