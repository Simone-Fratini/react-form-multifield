import { useState } from 'react';
import FoodCards from './FoodCards.jsx';
import foods from '../data/foods.jsx';

function MainComponent() {
  const [recipes, setRecipes] = useState(foods);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
  };

  return (
    <main className="container mx-auto">
      <FormComponent onAddRecipe={addRecipe} />
      <FoodCards recipes={recipes} />
    </main>
  );
}

function FormComponent({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && ingredients && cookingTime) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(',').map((ing) => ing.trim()),
        cookingTime,
        img: '../pasta/pastaCarbonara.jpg',
      };
      onAddRecipe(newRecipe);
      setTitle('');
      setIngredients('');
      setCookingTime('');
    }
  };

  return (
    <form className="p-4 bg-gray-100 rounded-lg mb-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Ingredients</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Cooking Time</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Add Recipe
      </button>
    </form>
  );
}

export default MainComponent;
