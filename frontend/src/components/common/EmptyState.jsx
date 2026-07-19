function EmptyState({ message = "No data found." }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
      <h2 className="text-xl font-semibold text-gray-500">{message}</h2>
    </div>
  );
}

export default EmptyState;
