import useSortAndFilter from './context/items-context';

export default function CategoryList({ category, categoryItems, renderItem }) {
  return (
    <div key={`${category}-category`} className="">
      <h2 className="mt-5 text-xl font-bold text-gray-300 capitalize">
        {category}
      </h2>
      <ul className="list-none">
        {categoryItems.map(renderItem)}
      </ul>
    </div>
  );
}