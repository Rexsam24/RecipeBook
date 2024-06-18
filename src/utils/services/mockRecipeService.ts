import { Recipe, RecipeService } from '../lib/types';
import {mockData} from '../mockdata';
// console.log(mockData)

const fetchRecipesData = async () => {
  const response = await fetch('/mockData.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

const mockRecipeService: RecipeService = {
    getDefaultRecipes: async (): Promise<Recipe[]> => {
      console.log("Using mockRecipeService")

      const data = await fetchRecipesData();  

      return new Promise((resolve) => {
        const filteredRecipes = data.users.meals.slice(0, 3);
        setTimeout(() => resolve(filteredRecipes), 1000);
      });
    },

      getRecipeById: async (id: string): Promise<Recipe[]> => {

        const data = await fetchRecipesData();

        return new Promise((resolve) => {
          const recipe = data.users.meals.filter((meal: any) => meal.idMeal === id);
          setTimeout(() => resolve(recipe), 1000);
        });
      },

      searchRecipes: async (searchQuery: string  ): Promise<Recipe[]> => { 

        const data = await fetchRecipesData();

        return new Promise((resolve) => {
          const filteredRecipes = mockData.filter(recipe => 
            recipe.strMeal.toLowerCase().startsWith(searchQuery.toLowerCase())
          );
          console.log(filteredRecipes);
          setTimeout(() => resolve(filteredRecipes), 1000);
        });
      }
      


};

export default mockRecipeService;
