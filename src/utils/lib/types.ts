// export interface Recipe {
//     idMeal: string;
//     strCategory: string;
//     strMeal: string;
//     strIngredient1: string;
//     strIngredient2: string;
//     strIngredient3: string;
//     strIngredient4: string;
//     strIngredient5: string;
//     strInstructions: string;
//     strMeasure1: string;
//     strMeasure2: string;
//     strMeasure3: string;
//     strMeasure4: string; 
//     strMeasure5: string;
//     strMealThumb: string;
//   }
export interface Recipe {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string | null;
  strIngredient10: string| null;
  strIngredient11: string| null;
  strIngredient12: string| null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  isBookmarked:boolean | null;
  }
  
  export interface RecipeService {
    searchRecipes: (searchQuery: string) => Promise<Recipe[]>;
    getDefaultRecipes: () => Promise<Recipe[]>;
    getRecipeById: (id: string ) => Promise<Recipe[]>;
  }


export interface RecipeState {
  cartItems: Recipe[];
  bookMarkedItems: Recipe[];
}

export interface CreateRecipe {
  name: string;
  ingredients: string;
  instructions: string;
  image: string | null ;
}
export interface CreatedCardProps { 
  products: CreateRecipe[];
  onDelete:(index: number) => void;
}

export interface Errors {
  name?: string;
  ingredients?: string;
  instructions?: string; 
}

export interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

export interface BookmarkCardProps {
  products: Recipe[];
  handleBookmarkToggle: (bookmarkarg: Recipe) => void;
}

export interface BookmarkProps{
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  isBookmarked: boolean;
}

export interface LoaderParams {
  searchQuery: string;
} 
 