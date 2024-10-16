export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-200">
      <div className="flex items-center">
        <p className="mr-2 text-gray-300">{quantity}</p>
        <p className="text-gray-300">{name}</p>
      </div>
      <p className="text-gray-300">{category}</p>
    </li>
  );
}
