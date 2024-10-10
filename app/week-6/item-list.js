'use client';

import Item from './item';
import Button from './button';
import useSortAndFilter from './use-sort-and-filter';
import CategoryList from './category-list';

export default function ItemList() {
  const {
    sortedItems,
    sortBy,
    sortByName,
    sortByCategory,
    sortByGroupedCategory,
  } = useSortAndFilter();

  const renderWithCategory = ([category, categoryItems]) => (
    <CategoryList
      category={category}
      categoryItems={categoryItems}
      renderItem={renderItem}
    />
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
