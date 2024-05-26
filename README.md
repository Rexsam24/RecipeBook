# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Interactive Recipe Book !!!

## Project Description !!!

This project is an interactive recipe book application built using React. Users can browse through a collection of recipes, view details of each recipe, customize servings, and add their own recipes to the collection. The application features client-side routing, bookmarking of favorite recipes, and a clean, responsive user interface.

## Features !!!

## Recipe List

- Display a list of recipes with their names and images.
- Include a search bar to filter recipes by name or ingredients.
- Allow users to click on a recipe to view its details.
- Recipe Details

## Recipe Details

- Show detailed information about a selected recipe, including ingredients and instructions.
- Allow users to customize the number of servings for the recipe and adjust ingredient quantities accordingly.
- Add Recipe

## Add Recipe

- Implement a feature that allows users to add their own recipes.
- A recipe should have a name, ingredients, instructions, and an optional image upload.
- Validate user input and handle errors gracefully.
- Other Features

## Other Features

- Implement client-side routing for navigation using React Router.
- Add a feature to favorite or bookmark recipes.

## UI/UX

- Create a clean and user-friendly interface.
- Ensure the application is responsive and visually appealing.

## Data Management

- Store recipes and their details using local storage.
- Load some sample recipes on the initial load.

## Testing

- Write unit tests for critical components, such as form validation.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/RexSam2409/RecipeBook.git

```

2. Install the dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

4.Open your browser and navigate to http://localhost:5173\

## Project Structure

src/
├── components/
│ ├── BookmarkCard.jsx
│ ├── CreatedCards.jsx
│ ├── Footer.jsx
│ ├── Hero.jsx
│ ├── Loading.jsx
│ ├── Navbar.jsx
│ ├── ProductsCards.jsx
│ ├── ProductsGrid.jsx
│ ├── RecipeCard.jsx
│ ├── Searchfield.jsx
├── featurs/
│ ├── receipe/
│ ├── ├── recipeSlice.js
├── pages/
│ ├── About.jsx
│ ├── Bookmark.jsx
│ ├── create.jsx
│ ├── Error.jsx
│ ├── FeaturedProducts.jsx
│ ├── HomeLayout.jsx
│ ├── products.jsx
│ ├── Recipe.jsx
│ ├── SingleProductPage.jsx
├── utils/
│ ├── loaders/
│ ├── ├── defaultdata.js
│ ├── ├── generateAmountOptions.js
│ ├── ├── index.js
├── App.jsx
├── main.jsx
├── index.css
├── store.js

## Usage

1. Browse Recipes - Upon opening the application, users are greeted with a homepage that displays a list of available recipes. Each recipe is shown with its name and image.

- Search Bar: Located at the top of the page, the search bar allows users to filter recipes by typing in the name of the recipe or any ingredient. This feature helps users quickly find specific recipes without having to scroll through the entire list.

2. View Recipe Details - Clicking on any recipe card from the homepage or search results takes the user to the recipe details page.

- Recipe Information: The details page shows the recipe name, category, image, ingredients, and instructions.
  Ingredients and Quantity: Ingredients are listed alongside their respective quantities.
  Customizing Servings: Users can customize the number of servings they want to prepare. By selecting the desired number of servings from a dropdown menu, the ingredient quantities will adjust accordingly to ensure accurate measurements.

3. Add a Recipe - Users can add their own recipes to the collection by navigating to the "Add Recipe" page.

- Recipe Form: The form requires users to input the recipe name, ingredients, and instructions. There is also an optional field for uploading an image of the dish.

- Validation: The form includes validation to ensure all required fields are filled out correctly. If any field is incomplete, an error message will be displayed to guide the user.

4. Favorite Recipes - Users can bookmark their favorite recipes for easy access later.

- Bookmark Feature: Each recipe card has a bookmark icon. Clicking this icon adds the recipe to the user's list of favorite recipes.

- Viewing Bookmarked Recipes: Users can view their bookmarked recipes by navigating to the "Bookmarks" page from the navigation menu.

5. Client-side Routing - The application uses React Router for seamless navigation between different pages.

- Navigation: The navigation bar allows users to switch between the home page, add recipe page, and bookmarks page without reloading the page.

- Breadcrumbs: Breadcrumbs are displayed on the recipe details page to help users understand their navigation path and easily return to the previous page.

6. Responsive Design - The application is designed to be fully responsive, ensuring a seamless experience across various devices and screen sizes.

- Mobile and Tablet View: The layout adjusts to smaller screens, providing a user-friendly interface on mobile and tablet devices.

- Desktop View: On larger screens, the layout makes use of the available space to display more information without clutter.

## Step-by-Step Guide to Using the Application

1. Opening the Application: Start the development server by running npm run dev. Open your web browser and navigate to http://localhost:3000 to view the application.

2. Browsing Recipes: On the homepage, scroll through the list of recipes. Use the search bar at the top to filter recipes by name or ingredients.

3. Viewing Details: Click on any recipe card to view detailed information about the recipe. On the details page, you can see the ingredients, instructions, and an image of the dish.

4. Customizing Servings:

- On the recipe details page, find the "Servings" dropdown menu.
- Select the desired number of servings.
- Click the "Add" button to adjust the ingredient quantities accordingly.

5. Create Recipe:

- Navigate to the "Create Recipe" page using the navigation bar.
- Fill out the form with the recipe name, ingredients, instructions, and optionally upload an image.
- Click the "Create Recipe" button to add your recipe to the collection.

6. Bookmarking a Recipe:

- On the recipe card, click the bookmark icon to add the recipe to your favorites.
- Navigate to the "Bookmarks" page to view all your bookmarked recipes.

7. Navigating the Application: Use the navigation bar to switch between the homepage, add recipe page, and bookmarks page without refreshing the page.

8. Viewing Bookmarked Recipes: Go to the "Bookmarks" page from the navigation menu to see a list of all the recipes you have bookmarked.

By following these steps, users can efficiently navigate the application, explore various recipes, customize servings, and add their own recipes to the collection. The responsive design ensures a smooth experience on all devices, making the Interactive Recipe Book accessible and enjoyable for all users.

## Testing

```sh

npm test

```
