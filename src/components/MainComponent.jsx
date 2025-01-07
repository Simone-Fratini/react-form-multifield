import { useState } from 'react';
import FoodCards from './FoodCards.jsx';
import foods from '../data/foods.jsx';
import RecipeForm from './RecipeForm.jsx';

function MainComponent() {
  const [recipes, setRecipes] = useState(foods);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
  };

  return (
    <main className="container mx-auto">
      <RecipeForm onAddRecipe={addRecipe} />
      <FoodCards recipes={recipes} />
    </main>
  );
}

export default MainComponent;
