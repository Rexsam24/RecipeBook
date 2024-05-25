import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2  gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl lg:leading-snug font-bold tracking-normal sm:text-6xl">
          Simple Way To Find Sweet Recipes
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Always take care of your health starting from the food menu that you
          consume every day
        </p>
        <div className=" p-6 flex justify-end">
          <Link to={`/products?query=r`}>
            <button className="btn w-32 btn-primary">Explore</button>
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
