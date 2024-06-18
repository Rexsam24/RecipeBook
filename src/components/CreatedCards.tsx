import React from 'react';
import { CreateRecipe, CreatedCardProps, Recipe } from '../utils/lib/types';
const CreatedCards = ({ products, onDelete }:CreatedCardProps) => {
  return (
    <>
      {products.map((item:CreateRecipe, index:number) => {
        const { name, ingredients, instructions, image } = item;
        return (
          <div key={index} className="py-4">
            <div className="card flex flex-col md:flex-row hover:drop-shadow-xl bg-base-100 shadow-xl">
              <figure className="p-4 md:p-10 flex-shrink-0">
                <img 
                  src={image || "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt="Recipe"
                  className="h-24 w-24 md:h-40 md:w-40 rounded-lg object-cover transition duration-300 group-hover:scale-105"
                />
              </figure>
              <div className="flex flex-col justify-between p-4 w-full">
                <div className="card-body text-left p-0">
                  <div className="mb-2">
                    <h2 className="card-title font-bold text-lg flex items-baseline">
                      <span>Name:</span>
                      <span className="font-normal ml-2">{name}</span>
                    </h2>
                  </div>
                  <div className="mb-2">
                    <h2 className="card-title font-bold text-lg flex items-baseline">
                      <span>Ingredients:</span>
                      <span className="font-normal ml-2">{ingredients}</span>
                    </h2>
                  </div>
                  <div className="mb-2">
                    <h2 className="card-title font-bold text-lg flex items-baseline">
                      <span>Instructions:</span>
                      <span className="font-normal ml-2 whitespace-pre-line">
                        {instructions}
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="mt-4 self-end md:self-start">
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(index)}
                  >
                    Delete
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

export default CreatedCards;
