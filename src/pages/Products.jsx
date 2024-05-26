import { Link, useNavigation } from "react-router-dom";
import useSearch from "../utils/loaders/useSearch";
import { loader } from "../utils/loaders/productsLoader";
import { useEffect } from "react";
import ProductsCard from "../components/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../features/recipe/recipeSlice";
import Loading from "../components/Loading";

const Products = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const products = useSelector((state) => state.recipeState.cartItems);
  const searchQuery = useSearch();
  const dispatch = useDispatch();

  useEffect(() => {
    loader({ searchQuery }).then((data) => {
      dispatch(setCartItems(data));
    });
  }, [searchQuery, dispatch]);

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <div className="text-md breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center mt-8  pb-5">
            <h4 className="font-medium text-md">
              {products.length} product{products.length > 1 && "s"}
            </h4>
          </div>
          <div className="py-12 px-4 justify-center  place-items-center shadow-none sm:shadow-lg grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products !== null ? (
              <ProductsCard />
            ) : (
              <div className="h-96 w-full ">
                <h1 className="text-2xl">
                  No search result found for {`'${searchQuery}'`}
                </h1>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Products;
