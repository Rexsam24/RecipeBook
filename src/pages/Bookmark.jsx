import { Link, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookmarkCard from "../components/BookmarkCard";
import { bookmark } from "../features/recipe/recipeSlice";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const Bookmark = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  const products = useSelector((state) => state.recipeState.bookMarkedItems);
  console.log(products);
  // const finalproduct = products.filter((item) => {
  //   console.log(item.isBookmarked); // This will log true, false, true, false
  //   return item.isBookmarked === true;
  // });
  // console.log(finalproduct);
  const dispatch = useDispatch();
  const handleBookmarkToggle = (bookmarkarg) => {
    const bookmarkdata = {
      ...bookmarkarg,
      isBookmarked: !bookmarkarg.isBookmarked,
    };
    const newData = products.filter((data) => {
      return data.idMeal !== bookmarkdata.idMeal;
    });
    dispatch(bookmark(newData));
    toast.success("Bookmark removed successfully");
    // setIsBookmark(!isBookmark);
  };
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
                <Link to="/products">BookMarks</Link>
              </li>
            </ul>
          </div>
          <div className="p-12 place-items-center shadow-lg grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.length > 0 ? (
              <BookmarkCard
                products={products}
                handleBookmarkToggle={handleBookmarkToggle}
              />
            ) : (
              <div className="h-96 w-full flex flex-col ">
                <div>
                  <h1 className="text-2xl font-bold">No Book mark found</h1>
                </div>
                <div className="flex justify-center mt-8 ">
                  <Link to={"/"} className="">
                    <button className="btn w-32 btn-primary">Back</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Bookmark;
