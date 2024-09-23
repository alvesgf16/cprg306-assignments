'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    quantity < 20 && setQuantity(quantity + 1);
  };

  const decrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className="rounded bg-red-500 px-4 py-2 text-white font-medium hover:bg-red-600 disabled:bg-red-900"
        onClick={decrement}
        disabled={quantity === 1}
      >
        -
      </button>
      <span className="text-lg font-bold">{quantity}</span>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 disabled:bg-blue-900"
        onClick={increment}
        disabled={quantity === 20}
      >
        +
      </button>
    </div>
  );
}
