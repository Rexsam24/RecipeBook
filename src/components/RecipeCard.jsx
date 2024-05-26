import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCartItems, bookmark } from "../features/recipe/recipeSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
// {
//   products, handleBookmarkToggle;
// }

const RecipeCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.recipeState.cartItems) || [];
  const bookMarkedItems = useSelector(
    (state) => state.recipeState.bookMarkedItems
  );
  useEffect(() => {
    const updatedProducts = products.map((product) => {
      const isBookmarked = bookMarkedItems.some(
        (item) => item.idMeal === product.idMeal
      );
      return { ...product, isBookmarked };
    });
    dispatch(setCartItems(updatedProducts));
  }, [bookMarkedItems, dispatch]);

  const handleBookmarkToggle = (bookmarkdataArg) => {
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
      };
      dispatch(bookmark([...bookMarkedItems, bookmarkdata]));
      toast.success("Bookmarked successfully");
    }

    const updatedProducts = products.map((item) =>
      item.idMeal === bookmarkdataArg.idMeal
        ? { ...item, isBookmarked: !isCurrentlyBookmarked }
        : item
    );
    dispatch(setCartItems(updatedProducts));
    // const bookmarkdata = {
    //   ...bookmarkdataArg,
    //   isBookmarked: !bookmarkdataArg.isBookmarked,
    // };
    // console.log(bookmarkdata);
    // console.log(products);
    // let exists = bookMarkedItems.some(
    //   (obj) => obj.idMeal === bookmarkdata.idMeal
    // );

    // // If object does not exist, add it to the array
    // if (!exists) {
    //   toast.success("Book marked Successfully");
    //   dispatch(bookmark([...bookMarkedItems, bookmarkdata]));
    // } else {
    //   // const newBookMarkedItems = [...bookMarkedItems, bookmarkdata];
    //   // dispatch(bookmark(newBookMarkedItems));

    //   const newData = products.map((data) => {
    //     if (data.idMeal === bookmarkdataArg.idMeal) {
    //       // Replace the object and add isBookmarked: false
    //       return {
    //         ...bookmarkdataArg,
    //         isBookmarked: !bookmarkdataArg.isBookmarked,
    //       };
    //     } else {
    //       // Add isBookmarked: false to the existing object
    //       return { ...data, isBookmarked: false };
    //     }
    //   });
    //   dispatch(setCartItems(newData));
    //   toast.success("Book marked removed");
    // }
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
