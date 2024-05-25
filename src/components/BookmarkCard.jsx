import { Link } from "react-router-dom";

const BookmarkCard = ({ products, handleBookmarkToggle }) => {
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
            <div className="card w-72  hover:drop-shadow-xl bg-base-100 shadow-xl">
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
                    className="btn btn-square w-16 btn-outline"
                    onClick={() => handleBookmarkToggle(bookmark)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
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
export default BookmarkCard;
