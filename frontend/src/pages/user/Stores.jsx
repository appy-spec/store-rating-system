import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import { userLinks } from "../../utils/sidebarLinks";

import SearchBar from "../../components/common/SearchBar";
//import StoreCard from "../../components/user/StoreCard";
import CommonTable from "../../components/common/CommonTable";
import AddRatingModal from "../../components/user/AddRatingModal";
import Loader from "../../components/common/Loader";
import Button from "../../components/common/Button";
import SortSelect from "../../components/common/SortSelect";

import useSearch from "../../hooks/useSearch";
import useSort from "../../hooks/useSort";
import useFetch from "../../hooks/useFetch";

import { getStores } from "../../services/rating.service";

function Stores() {
  const { data: stores = [], loading, refresh } = useFetch(getStores);

  const { search, setSearch, filteredData } = useSearch(stores, [
    "name",
    "address",
  ]);

  const [sortBy, setSortBy] = useState("");
  const sortedStores = useSort(filteredData, sortBy);
 
  const [openModal, setOpenModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  const columns = [
    {
      label: "Store Name",
      key: "name",
    },
    {
      label: "Address",
      key: "address",
    },
    {
      label: "Overall Rating",
      key: "overallRating",
    },
  ];

  if (loading) return <Loader />;

  return (
    <DashboardLayout links={userLinks}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Browse Stores</h1>

        <div className="flex gap-4">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Stores..."
          />

          <SortSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            options={[
              {
                label: "Sort By",
                value: "",
              },
              {
                label: "Store Name",
                value: "name",
              },
              {
                label: "Address",
                value: "address",
              },
              {
                label: "Overall Rating",
                value: "overallRating",
              },
            ]}
          />
        </div>
      </div>

      <CommonTable
        columns={columns}
        data={sortedStores}
        actions={(store) => (
          <Button
            onClick={() => {
              setSelectedStore(store);
              setOpenModal(true);
            }}
          >
            {store.userRating ? "Update Rating" : "Add Rating"}
          </Button>
        )}
      />

      {/* <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {sortedStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div> */}

      {selectedStore && (
        <AddRatingModal
          isOpen={openModal}
          onClose={() => {
            setOpenModal(false);
            setSelectedStore(null);
          }}
          onSuccess={refresh}
          store={selectedStore}
        />
      )}
    </DashboardLayout>
  );
}

export default Stores;
