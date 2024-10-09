'use client';

import Item from './item';
import itemsJson from './items';
import Button from './button';
import useSortAndFilter from './use-sort-and-filter';

export default function ItemList() {
  const {
    sortedItems,
    sortBy,
    sortByName,
    sortByCategory,
    sortByGroupedCategory,
  } = useSortAndFilter(itemsJson);

  const renderWithCategory = ([category, categoryItems]) => (
    <div key={`${category}-category`} className="">
      <h2 className="mt-5 text-xl font-bold text-gray-300 capitalize">
        {category}
      </h2>
      <ul className="list-none">
        {categoryItems.map(renderItem)}
      </ul>
    </div>
  );

  const renderItem = ({ id, name, quantity, category }) => (
    <Item key={id} name={name} quantity={quantity} category={category} />
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
