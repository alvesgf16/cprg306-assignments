import { useState } from 'react';

export default function useSortAndFilter(itemsJson) {
  const items = [...itemsJson];

  const [sortBy, setSortBy] = useState('name');

  const compareItemsBySelectedProperty = (item1, item2) =>
    item1[sortBy].localeCompare(item2[sortBy]);

  const groupByCategory = (itemsByCategory, currentItem) => {
    itemsByCategory[currentItem.category] =
      itemsByCategory[currentItem.category] || [];

    itemsByCategory[currentItem.category].push(currentItem);
    
    return itemsByCategory;
  };

  const compareNames = ({ name: name1 }, { name: name2 }) =>
    name1.localeCompare(name2);

  const sortedItems =
    sortBy === ''
      ? Object.entries(
          items.sort(compareNames).reduce(groupByCategory, {}),
        ).sort()
      : items.sort(compareItemsBySelectedProperty);

  const sortByName = () => setSortBy('name');

  const sortByCategory = () => setSortBy('category');

  const sortByGroupedCategory = () => setSortBy('');

  return {
    sortedItems,
    sortBy,
    sortByName,
    sortByCategory,
    sortByGroupedCategory,
  };
}
