import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { generateAmountOptions } from "../utils/generateAmountOptions";
const SingleProductPage = () => {
  const data = useLoaderData();
  const {
    idMeal,
    strCategory,
    strMeal,

    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strInstructions,
    strMealThumb,
  } = data[0];
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];
  const measurements = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
  ];
  const [serving, setServing] = useState(measurements);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  // Function to extract the numerical part before 'g'

  // Extract numbers, multiply by 2, and then format back to the original string

  const handleServing = () => {
    setServing((prevServing) =>
      prevServing.map((str) => {
        const match = str.match(/^(\d+)g/);
        if (!match) return str; // Ensure we handle strings without the expected format gracefully
        const num = Number(match[1]);
        const multipliedNum = num * amount;
        return str.replace(/^(\d+)g/, `${multipliedNum}g`);
      })
    );
  };
  return (
    <>
      <section key={idMeal}>
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
        {/* PRODUCT */}
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          {/* IMAGE */}
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />

          {/* PRODUCT */}
          <div>
            <h1 className="capitalize text-3xl font-bold">{strMeal}</h1>
            <h4 className="text-xl text-neutral-content font-bold mt-2">
              {strCategory}
            </h4>

            {/* ingredients & measurements */}
            <div className="flex flex-row my-4 justify-center gap-16">
              <div className="flex items-center flex-col">
                <span className="  text-xl font-bold text-primary">
                  Ingredients
                </span>

                {ingredients.map((i, index) => (
                  <span key={index}>
                    {index + 1}.{i}
                  </span>
                ))}
              </div>
              <div className="flex items-center flex-col">
                <span className="  text-xl font-bold text-primary">
                  Quantity
                </span>

                {serving.map((i, index) => (
                  <p key={index}>{i}</p>
                ))}
              </div>
            </div>

            <p>{strInstructions}</p>
            {/* Servings */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  servings
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                id="amount"
                value={amount}
                onChange={handleAmount}
              >
                {generateAmountOptions(10)}
              </select>
            </div>
            {/* CART BTN */}
            <div className="mt-2">
              <button
                className="btn btn-secondary btn-md"
                onClick={handleServing}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingleProductPage;
