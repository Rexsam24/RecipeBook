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
  const handleServing = () => {
    const newServings = measurements.map((measure) => {
      const match = measure.match(/(\d*\.?\d+)(.*)/);
      if (!match) return measure;
      // eslint-disable-next-line no-unused-vars
      const [_, num, unit] = match;
      const newNum = (parseFloat(num) * amount).toFixed(2);
      return `${newNum}${unit}`;
    });

    setServing(newServings);
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
                <span className="  text-xl  mb-4  font-bold text-primary">
                  Ingredients
                </span>
                <ul>
                  {ingredients.map((i, index) => (
                    <li key={index}>
                      {index + 1}.{i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center flex-col">
                <span className="  text-xl mb-4 font-bold text-primary">
                  Quantity
                </span>
                <ul>
                  {serving.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
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
              <div className="mt-2 flex justify-center">
                <button
                  className="btn w-52 btn-secondary btn-md"
                  onClick={handleServing}
                >
                  Add
                </button>
              </div>
            </div>
            {/* CART BTN */}
          </div>
        </div>
      </section>
    </>
  );
};
export default SingleProductPage;
