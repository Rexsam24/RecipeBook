import { Link, useLocation, useNavigation } from "react-router-dom";
// import { customFetch } from "../utils";
// import { useEffect, useState } from "react";
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
  const location = useLocation();
  const dispatch = useDispatch();

  // const [bookmarks, setBookmarks] = useState([]);
  // searchQuery && ;
  useEffect(() => {
    loader({ searchQuery }).then((data) => {
      dispatch(setCartItems(data));

      // // Load bookmarks from localStorage
      // const storedBookmarks =
      //   JSON.parse(localStorage.getItem("bookmarks")) || [];
      // setBookmarks(storedBookmarks);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  //   let newbookmark = [];
  //   let updatedBookmarks;
  //   newbookmark.push(bookmarkdata);
  //   // const item = bookmarks.find((i) => i.idMeal !== bookmarkdata.idMeal);
  //   // console.log(item);
  //   // // bookmarks.push(bookmarkdata);
  //   // if (item) {
  //   //   updatedBookmarks = bookmarks.filter(
  //   //     (i) => i.idMeal !== bookmarkdata.idMeal
  //   //   );
  //   // } else {
  //   //   updatedBookmarks = [...bookmarks, bookmarkdata];
  //   // }
  //   console.log(newbookmark);
  //   setBookmarks(updatedBookmarks);
  //   // localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  // };
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
          <div className="pt-12 px-4 justify-center place-items-center shadow-lg grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

{
  /* <ProductsCard
  products={recipes}
  handleBookmarkToggle={handleBookmarkToggle}
  isBookmarked={bookmarks.includes(products.idMeal)}
  toggle={toggle}
  />; */
}

// products.map((item) => {
//             const { idMeal, strMeal, strCategory, strMealThumb } = item;
//             return (
//               <Link key={idMeal} to={idMeal} className="py-4">
//                 <div className="card w-72 px-4  hover:drop-shadow-xl bg-base-100 shadow-xl">
//                   <figure className="px-10 pt-10">
//                     <img
//                       src={strMealThumb}
//                       alt="Shoes"
//                       className="rounded-xl"
//                     />
//                   </figure>
//                   <div className="card-body items-center text-center">
//                     <h2 className="card-title">{strMeal}</h2>
//                     <p>{strCategory}</p>

//                     <div className="card-actions">
//                       <button className="btn btn-primary">Book Mark</button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })

// const location = useLocation();

// const [data, setData] = useState("");
// useEffect(() => {
//   const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
//   const queryParams = new URLSearchParams(location.search);
//   const query = queryParams.get("query");
//   const data = async () => {
//     try {
//       const response = await customFetch(`${url}${query}`);
//       setData(response.data.meals);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   data();
// }, [location.search]);
// console.log(data);
// const products = data.slice(0, 9);
// console.log(products);
