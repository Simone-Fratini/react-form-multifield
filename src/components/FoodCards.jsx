function FoodCards({ recipes }) {
  const ingredientsList = (ingredientsArray) => {
    return ingredientsArray.join(', ');
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 py-11">
      {recipes.map((food) => (
        <div
          key={food.id}
          className="relative bg-white shadow-2xl rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 m-3 hover:animate-grow overflow-hidden"
          style={{ zIndex: 0 }} // Ensure the cards are behind the header
        >
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
            <img
              src={food.img}
              alt={food.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-4">
            <h2 className="text-center font-bold">{food.title}</h2>
            <p className="pt-4">
              <strong>Ingredients:</strong> {ingredientsList(food.ingredients)}.
            </p>
            <p className="pt-3">
              <strong>Cooking Time:</strong> {food.cookingTime}.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCards;
