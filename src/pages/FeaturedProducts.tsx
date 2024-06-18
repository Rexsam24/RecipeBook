import ProductsGrid from "../components/ProductsGrid";
import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className=" p-8 mt-14 border-t-2 flex flex-col">
      <div className="text-center w-full">
        <h4 className="text-secondary  font-mono font-semibold tracking-wider ">
          SPECIAL RECIPES
        </h4>
        <h4 className="text-3xl mb-4 font-bold">Our Special Recipes</h4>
        <p>
          Always take care of your health starting from the food menu that you
          <br />
          consume every day
        </p> 
      </div>
      <ProductsGrid />
    </section>
  );
};
export default FeaturedProducts;
