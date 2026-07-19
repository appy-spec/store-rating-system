import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating, onRate, editable = false }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={22}
          onClick={() => editable && onRate(star)}
          className={`
                ${
                    star <= rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
                ${editable ? "cursor-pointer" : ""}
            `}
        />
      ))}
    </div>
  );
};

export default RatingStars;
