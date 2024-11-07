'use client';

import { useState } from 'react';
import { useItems } from '../_utils/items-context';
import { addItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const { items, setItems } = useItems();
  const { user } = useUserAuth();

  const categories = [
    'Produce',
    'Dairy',
    'Bakery',
    'Meat',
    'Frozen Foods',
    'Canned Goods',
    'Dry Goods',
    'Beverages',
    'Snacks',
    'Household',
    'Other',
  ];

  const increment = () => {
    quantity < 20 && setQuantity(quantity + 1);
  };

  const decrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };

    const itemId = addItem(user.uid, item).then((id) => id);

    setItems([...items, { id: itemId, ...item }]);

    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form className="flex flex-col space-y-4 max-w-80 mx-auto mt-8">
      <div className="flex items-baseline justify-between space-y-2">
        <label className="mx-3 w-20 text-end text-gray-300 font-bold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-baseline justify-between space-y-2">
        <p className="mx-3 w-20 text-end text-gray-300 font-bold">Quantity:</p>
        <div className="flex items-center justify-center space-x-4 w-48">
          <button
            type="button"
            className="rounded bg-red-500 px-4 py-2 text-white font-medium hover:bg-red-600 disabled:bg-red-900"
            onClick={decrement}
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="text-lg text-gray-300 font-bold">{quantity}</span>
          <button
            type="button"
            className="rounded bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 disabled:bg-blue-900"
            onClick={increment}
            disabled={quantity === 20}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-baseline justify-between space-y-2">
        <label className="mx-3 w-20 text-end text-gray-300 font-bold">
          Category:
        </label>
        <select
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
          className="border rounded w-48 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option
              key={`${category.toLowerCase().replace(' ', '-')}-category`}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="rounded bg-green-500 px-4 py-2 text-white font-medium hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
}
