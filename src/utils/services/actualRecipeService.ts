import { Recipe, RecipeService } from '../lib/types';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

const actualRecipeService: RecipeService = {
 getDefaultRecipes: async (): Promise<Recipe[]> => {
        console.log("Using actualRecipeService")
        const response = await fetch(`${baseUrl}/search.php?f=s`);
        const data = await response.json();
        return data.meals.slice(0, 3);
    },
getRecipeById: async (id: string | undefined): Promise<Recipe[]> => {
        const response = await fetch(`${baseUrl}/lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals;  
      },

searchRecipes: async (searchQuery: string | null): Promise<Recipe[]> => { 
    const response = await fetch(`${baseUrl}/search.php?s=${searchQuery}`); 
    console.log(response)
    const data = await response.json();
    console.log(data)
    return data.meals;
  },


};

export default actualRecipeService;
