const RatingOverview = ({ averageRating, storeName }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-center">Average Rating of {storeName}</h2>

      <div className="mt-6 text-center">
        <h1 className="text-6xl font-bold text-yellow-500">
          ⭐ {averageRating ?? "0.0"}
        </h1>
      </div>
    </div>
  );
};

export default RatingOverview;
