'use client';

import ItemList from './item-list';
import NewItem from './new-item';
import ItemsProvider from './context/items-provider';
import MealIdeas from './meal-ideas';
import { useState } from 'react';

export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (name) => {
    let result = name
      .replace(
        /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]|s?,\s.*|s[^\w]/g,
        '',
      );
    setSelectedItemName(result);
  };

  return (
    <ItemsProvider>
      <main className="container mx-auto p-4 flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-4 w-full">
          Shopping List
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/2">
            <NewItem />
            <ItemList onItemSelect={(name) => handleItemSelect(name)} />
          </div>

          <div className="md:w-1/2 md:ml-4">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </main>
    </ItemsProvider>
  );
}
