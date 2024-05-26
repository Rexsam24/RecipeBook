import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatedCards from "../components/CreatedCards";
import defaultdata from "../utils/defaultdata";

const Create = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("recipes")) || defaultdata
  );
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    image: null,
  });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: e.target.files[0] });
  };

  const validate = () => {
    let errors = {};

    if (!recipe.name) errors.name = "Name is required";
    if (!recipe.ingredients) errors.ingredients = "Ingredients are required";
    if (!recipe.instructions) errors.instructions = "Instructions are required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill required fields");
    } else {
      const existingRecipes =
        JSON.parse(localStorage.getItem("recipes")) || products;
      const newRecipe = {
        ...recipe,
        image: recipe.image
          ? URL.createObjectURL(recipe.image)
          : "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      };
      existingRecipes.push(newRecipe);
      // Save updated recipes to localStorage
      localStorage.setItem("recipes", JSON.stringify(existingRecipes));

      setProducts(existingRecipes);
      setErrors({});
      toast.success("Recipe added successfully!");
      setRecipe({ name: "", ingredients: "", instructions: "", image: null });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className=" flex flex-col">
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
      <section className="px-8 mt-4 flex justify-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-6 shadow-none sm:shadow-lg gap-6"
        >
          <div className="flex flex-col md:flex-row md:gap-12">
            {/* input-box */}
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
              {/* ingredients box */}
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

            {/* instructions */}
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
              {/* upload Image */}
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
      <section className="px-24  gap-4  grid gap-y-8">
        {products.length > 0 && <CreatedCards products={products} />}
      </section>
    </div>
  );
};
export default Create;
