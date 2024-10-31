'use client';

import { useEffect, useState } from 'react';
import fetchMealIdeas from './utils/fetch-meal-ideas';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async (ingredient) => {
    const data = await fetchMealIdeas(ingredient);
    console.log(ingredient);
    setMeals(data);
  };

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      <p className="text-gray-300 text-xl mb-3">
        {ingredient === ''
          ? 'Select an item to see meal ideas'
          : meals === null
          ? `No meal ideas found for ${ingredient}`
          : `Here are some meal ideas using ${ingredient}:`}
      </p>
      <ul className="list-none">
        {meals &&
          ingredient &&
          meals.map(({ idMeal, strMeal }) => (
            <li key={idMeal} className="text-lg mb-2">
              {strMeal}
            </li>
          ))}
      </ul>
    </div>
  );
}
