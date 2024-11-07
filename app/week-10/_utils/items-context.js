'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useUserAuth } from './auth-context';
import { getItems } from '../_services/shopping-list-service';

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  const { user } = useUserAuth();

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

  useEffect(() => {
    const loadItems = async () => {
      const dbItems = await getItems(user.uid);

      setItems(dbItems);
    };

    loadItems().catch(console.error);
  }, [user]);

  const value = {
    items,
    setItems,
    sortedItems,
    sortBy,
    sortByName,
    sortByCategory,
    sortByGroupedCategory,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export const useItems = () => {
  return useContext(ItemsContext);
};
