import foods from '../data/foods.jsx';

function ingredientsList(ingredientsArray) {
  let ingredients = "";
  ingredientsArray.forEach(ingredient => {
    ingredients += ingredient + ", ";
  });
  return ingredients.trim().slice(0, -1);
}


function FoodCards() {
  
  return (
    <div className="flex flex-wrap justify-center gap-4 py-11">
  {foods.map((food) => (
    <div key={food.id} className="bg-white shadow-2xl rounded-lg  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 m-3 hover:animate-grow">
      <img src={food.img} alt={food.title} className="w-full object-cover object-center rounded-lg"/>
      <div className="p-4">
        <h2 className='text-center font-bold'>{food.title}</h2>
        <p className=' pt-4'><strong>Ingredients:</strong> {ingredientsList(food.ingredients)}.</p>
        <p className='pt-3'><strong>Coocking Time:</strong> {food.cookingTime}.</p>
      </div>
    </div>
  ))}
</div>

  );
}   

export default FoodCards;   