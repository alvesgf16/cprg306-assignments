'use client';

import { useState } from 'react';
import Item from './item';
import items from './items';
import Button from './button';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const groupByCategory = (itemsByCategory, currentItem) => {
    itemsByCategory[currentItem.category] =
      itemsByCategory[currentItem.category] || [];
    itemsByCategory[currentItem.category].push(currentItem);
    return itemsByCategory;
  };

  const renderCategory = ([category, categoryItems]) => (
    <div key={`${category}-category`} className="">
      <h2 className="mt-5 text-xl font-bold text-gray-300 capitalize">
        {category}
      </h2>
      <ul className="list-none">
        {categoryItems.sort(compareNames).map(renderItem)}
      </ul>
    </div>
  );

  const compareNames = ({ name: name1 }, { name: name2 }) =>
    name1.localeCompare(name2);

  const compareItemsBySelectedProperty = (item1, item2) =>
    item1[sortBy].localeCompare(item2[sortBy]);

  const renderItem = ({ id, name, quantity, category }) => (
    <Item key={id} name={name} quantity={quantity} category={category} />
  );

  const sortByName = () => setSortBy('name');

  const sortByCategory = () => setSortBy('category');

  const sortByGroupedCategory = () => setSortBy('');

  return (
    <div className="flex flex-col space-y-4">
      <ul className="list-none">
        {sortBy === ''
          ? Object.entries(items.reduce(groupByCategory, {}))
              .sort()
              .map(renderCategory)
          : items.sort(compareItemsBySelectedProperty).map(renderItem)}
      </ul>
      <div className="flex space-x-4">
        <Button
          isActive={sortBy === 'name'}
          onClick={sortByName}
          text={'Name'}
        />
        <Button
          isActive={sortBy === 'category'}
          onClick={sortByCategory}
          text={'Category'}
        />
        <Button
          isActive={sortBy === 'category'}
          onClick={sortByGroupedCategory}
          text={'Grouped Category'}
        />
      </div>
    </div>
  );
}
