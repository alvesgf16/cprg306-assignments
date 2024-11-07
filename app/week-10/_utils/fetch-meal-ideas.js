const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  const { meals } = await response.json();
  return meals;
};

export default fetchMealIdeas;
