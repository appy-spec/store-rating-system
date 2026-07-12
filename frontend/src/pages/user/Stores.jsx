import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";
import { userLinks } from "../../utils/sidebarLinks";

import SearchBar from "../../components/common/SearchBar";
import StoreCard from "../../components/user/StoreCard";
//import RatingModal from "../../components/user/RatingModal";

import {
  getStores,
  submitRating,
  updateRating,
} from "../../services/rating.service";

function Stores() {
  const [stores, setStores] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    address: "",
  });

  const fetchStores = async () => {
    try {
      const response = await getStores(filters);
      setStores(response.data.data);
    } catch {
      toast.error("Unable to fetch stores.");
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  const openModal = (store) => {
    setSelectedStore(store);
    setOpen(true);
  };

  const handleRate = async (store, rating) => {
    try {
      if (store.userRating) {
        await updateRating(store.id, {
          rating,
        });
      } else {
        await submitRating({
          store_id: store.id,
          rating,
        });
      }

      toast.success("Rating saved successfully.");
      fetchStores();
    } catch {
      toast.error("Unable to save rating.");
    }
  };

  return (
    <DashboardLayout links={userLinks}>
      <h1 className="text-3xl font-bold">Browse Stores</h1>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <SearchBar
          placeholder="Search Store"
          value={filters.name}
          onChange={(e) =>
            setFilters({
              ...filters,

              name: e.target.value,
            })
          }
        />

        <SearchBar
          placeholder="Search Address"
          value={filters.address}
          onChange={(e) =>
            setFilters({
              ...filters,

              address: e.target.value,
            })
          }
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} onRate={handleRate} />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Stores;
