export default function Button({ isActive, onClick, text }) {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-md ${
        isActive
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700'
      }`}
      onClick={onClick}
    >
      { text }
    </button>
  );
}
