import RatingStars from "./RatingStars";

const StoreCard = ({ store, onRate }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold">{store.name}</h2>

      <p className="text-gray-500 mt-2">{store.address}</p>

      <div className="mt-4">
        <p className="font-medium">Overall Rating</p>

        <RatingStars rating={Math.round(store.overallRating || 0)} />
      </div>

      <div className="mt-4">
        <p className="font-medium">Your Rating</p>

        <RatingStars
          rating={store.userRating || 0}
          editable
          onRate={(value) => onRate(store, value)}
        />
      </div>
    </div>
  );
};

export default StoreCard;
