const RatingOverview = ({ averageRating }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold">Average Rating</h2>

      <div className="mt-6 text-center">
        <h1 className="text-6xl font-bold text-yellow-500">
          ⭐ {averageRating ?? "0.0"}
        </h1>
      </div>
    </div>
  );
};

export default RatingOverview;
