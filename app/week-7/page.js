'use client';

import ItemList from './item-list';
import NewItem from './new-item';
import ItemsProvider from './context/items-provider';

export default function Page() {
  return (
    <ItemsProvider>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Shopping List</h1>
        <NewItem />
        <ItemList />
      </main>
    </ItemsProvider>
  );
}
