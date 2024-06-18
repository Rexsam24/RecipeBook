import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatedCards from "../components/CreatedCards";
import defaultdata from "../utils/defaultdata";
import React from 'react';
import { CreateRecipe, Errors } from "../utils/lib/types";

const Create = () => {
  const [products, setProducts] = useState<CreateRecipe[]>(
    JSON.parse(localStorage.getItem('recipes') || 'null') || defaultdata
  );
  const [recipe, setRecipe] = useState<CreateRecipe>({
    name: "",
    ingredients: "",
    instructions: "",
    image: null,
  });
  const [errors, setErrors] = useState<Errors>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bc = new BroadcastChannel('recipesChannel');

  useEffect(() => {
    bc.onmessage = (event) => {
      setProducts(event.data.recipes);
        }

    return () => {
    
      bc.close();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setRecipe({ ...recipe, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const validate = (): Errors => {
    let errors: Errors = {};

    if (!recipe.name) errors.name = "Name is required";
    if (!recipe.ingredients) errors.ingredients = "Ingredients are required";
    if (!recipe.instructions) errors.instructions = "Instructions are required";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill required fields");
    } else {
      const existingRecipes: CreateRecipe[] =
        JSON.parse(localStorage.getItem("recipes") || '[]') || products;
      const newRecipe:CreateRecipe = {
        ...recipe,
        image: recipe.image
          ? recipe.image
          : "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      };
      existingRecipes.push(newRecipe);
      localStorage.setItem("recipes", JSON.stringify(existingRecipes));

      setProducts(existingRecipes);
      setErrors({});
      toast.success("Recipe added successfully!"); 
      setRecipe({ name: "", ingredients: "", instructions: "", image: null });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      bc.postMessage({
        recipes: existingRecipes,
      })
    }
  };

  const handleDelete = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("recipes", JSON.stringify(updatedProducts));
    toast.success("Recipe removed successfully!");
    bc.postMessage({
      recipes: updatedProducts,
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl">Create Your Own Recipe</h1>
      </div>
      <div className="text-md mt-4 breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Recipe</Link>
          </li>
        </ul>
      </div>

      <section className="px-8 mt-4 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col rounded-lg p-6 shadow-none sm:shadow-lg gap-6"
        >
          <div className="flex flex-col md:flex-row md:gap-12">
            <div className="p-2 w-full">
              <div className="w-full">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Name of the recipe
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={recipe.name}
                    onChange={handleChange}
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </label>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>
              <div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Ingredients:
                    </span>
                  </div>
                  <textarea
                    name="ingredients"
                    value={recipe.ingredients}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full h-24"
                    placeholder="Type here"
                  ></textarea>
                </label>
                {errors.ingredients && (
                  <p style={{ color: "red" }}>{errors.ingredients}</p>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Instructions:</span>
                  </div>
                  <textarea
                    name="instructions"
                    value={recipe.instructions}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full h-24"
                    placeholder="Type here"
                  ></textarea>
                </label>
                {errors.instructions && (
                  <p style={{ color: "red" }}>{errors.instructions}</p>
                )}
              </div>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Upload Image (optional):</span>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="file-input file-input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="btn btn-primary w-56">
              Create Recipe
            </button>
          </div>
        </form>
      </section>
      <div className="flex justify-between  items-center border-b-2 mb-8 mt-12 pb-5">
        <h4 className="font-medium text-md">
          {products.length} product{products.length > 1 && "s"}
        </h4>
      </div>
      <section className="sm:px-24 gap-4 grid gap-y-8">
        {products.length > 0 && (
          <CreatedCards products={products} onDelete={handleDelete} />
        )}
      </section>
    </div>
  );
};

export default Create;
