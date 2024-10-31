'use client';

import Item from './item';
import Button from './button';
import CategoryList from './category-list';
import { useContext } from 'react';
import ItemsContext from './context/items-context';

export default function ItemList({ onItemSelect }) {
  const {
    sortBy,
    sortedItems,
    sortByName,
    sortByCategory,
    sortByGroupedCategory,
  } = useContext(ItemsContext);

  const renderWithCategory = ([category, categoryItems]) => (
    <CategoryList
      category={category}
      categoryItems={categoryItems}
      renderItem={renderItem}
    />
  );

  const renderItem = ({ id, name, quantity, category }) => (
    <Item
      key={id}
      name={name}
      quantity={quantity}
      category={category}
      onSelect={(name) => onItemSelect(name)}
    />
  );

  return (
    <div className="flex flex-col space-y-4">
      <ul className="list-none">
        {sortBy === ''
          ? sortedItems.map(renderWithCategory)
          : sortedItems.map(renderItem)}
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
          isActive={sortBy === ''}
          onClick={sortByGroupedCategory}
          text={'Grouped Category'}
        />
      </div>
    </div>
  );
}
