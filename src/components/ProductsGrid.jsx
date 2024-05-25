import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { useDispatch } from "react-redux";
import { setCartItems } from "../features/recipe/recipeSlice";

const ProductsGrid = () => {
  const products = useLoaderData();
  // const [isBookmark, setIsBookmark] = useState(false);

  const dispatch = useDispatch();
  dispatch(setCartItems(products));

  // const handleBookmarkToggle = (bookmarkarg) => {
  //   const bookmarkdata = {
  //     ...bookmarkarg,
  //     isBookmark: !bookmarkarg.isBookmarked,
  //   };
  //   console.log(bookmarkdata);
  //   dispatch(bookmark({ bookmark: bookmarkdata }));
  //   toast.success("Book marked successfully");

  //   // setIsBookmark(!isBookmark);
  // };

  // products = { products };
  // handleBookmarkToggle = { handleBookmarkToggle };
  return (
    <div className="px-4  grid place-items-center md:grid-cols-2 lg:grid-cols-3">
      <RecipeCard />
    </div>
  );
};
export default ProductsGrid;

// {
//   products.map((item) => {
//     const { idMeal, strMeal, strCategory, strMealThumb } = item;
//     return (
//       <div key={idMeal} className="py-4">
//         <div className="card w-72 px-4  hover:drop-shadow-xl bg-base-100 shadow-xl">
//           <figure className="px-10 pt-10">
//             <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
//           </figure>
//           <div className="card-body items-center text-center">
//             <h2 className="card-title">{strMeal}</h2>
//             <p>{strCategory}</p>
//             <Link to={`products/${idMeal}`}>
//               <div className="card-actions">
//                 <button className="btn btn-primary">View Details</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   });
// }

// <div className="card mt-6 w-72 hover shadow-xl">
//   <figure>
//     <img
//       src={strMealThumb}
//       alt={strMeal}
//       className="rounded-xl h-64 md:h-48 w-full object-cover"
//     />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title text-md">{strMeal}</h2>
//     {/* <p>{strIngredient1}</p> */}
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Book Mark</button>
//     </div>
//   </div>
// </div>;
{
  /* <div className="stats">
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-8 h-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Total Likes</div>

    <div className="stat-desc">21% more than last month</div>
  </div>
</div>; */
}
