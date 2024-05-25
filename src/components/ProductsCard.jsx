import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../features/recipe/recipeSlice";
import { toast } from "react-toastify";

const ProductsCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.recipeState.cartItems) || [];
  const handleBookmarkToggle = (bookmarkdataArg) => {
    const bookmarkdata = {
      ...bookmarkdataArg,
      isBookmarked: !bookmarkdataArg.isBookmarked,
    };
    const newData = products.map((data) => {
      if (data.idMeal === bookmarkdataArg.idMeal) {
        return (data = bookmarkdata);
      } else {
        return data;
      }
    });
    dispatch(setCartItems(newData));
    toast.success("Book marked Successfully");
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
        };
        return (
          <div key={idMeal} className="py-4">
            <div className="card w-72 hover:drop-shadow-xl bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body  items-center text-center">
                <h2 className="card-title text-lg h-20 ">{strMeal}</h2>
                <p className="text-lg mb-2">{strCategory}</p>
                <div className="flex flex-row  gap-2">
                  <Link to={idMeal}>
                    <div className="card-actions">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </Link>
                  <button
                    className="btn btn-square w-16 btn-outline"
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
export default ProductsCard;
