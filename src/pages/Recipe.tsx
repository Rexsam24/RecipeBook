import React from 'react';
import Hero from "../components/Hero";
import Searchfield from "../components/Searchfield";
import FeaturedProducts from "./FeaturedProducts";

const Recipe = () => {
  return (
    <>
      <Searchfield />
      <Hero />
      <FeaturedProducts />
    </> 
  );
};
export default Recipe;
