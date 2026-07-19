import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Modal from "../common/Modal";
import Button from "../common/Button";
import StarRating from "./RatingStars";
import Loader from "../common/Loader";

import { submitRating, updateRating } from "../../services/rating.service";

const AddRatingModal = ({ isOpen, onClose, onSuccess, store }) => {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (store) {
      setRating(store.userRating || 0);
    }
  }, [store]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }

    try {
      setLoading(true);

      if (store.userRating) {

        await updateRating({
          store_id: store.id,
          rating,
        });
        toast.success("Rating updated successfully.");
      } else {
        await submitRating({
          store_id: store.id,
          rating,
        });
        toast.success("Rating submitted successfully.");
      }

      onSuccess();
      onClose();

    } catch (error) {
      toast.error(error?.response?.data?.message || "Unable to save rating.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center text-center py-8 min-h-[250px]">
          <h2 className="text-2xl font-bold mb-3">
            {store.userRating ? "Update Rating" : "Add Rating"}
          </h2>

          {loading ? (
            <Loader />
          ) : (
            <>
              <p className="text-gray-600 mb-5">
                {store.userRating
                  ? "Update your rating for this store"
                  : "Select a rating for this store"}
              </p>

              <StarRating rating={rating} editable onRate={setRating} />
            </>
          )}

          <div className="flex justify-center gap-3 mt-8">
            <Button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm"
            >
              {store.userRating ? "Update" : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddRatingModal;
