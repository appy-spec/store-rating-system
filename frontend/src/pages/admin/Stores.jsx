import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import { adminLinks } from "../../utils/sidebarLinks";
import { getStores } from "../../services/admin.service";
import useFetch from "../../hooks/useFetch";
import useSearch from "../../hooks/useSearch";
import Loader from "../../components/common/Loader";
import Button from "../../components/common/Button";
import SearchBar from "../../components/common/SearchBar";
import CommonTable from "../../components/common/CommonTable";
import AddStoreModal from "../../components/admin/AddStoreModal";
import SortSelect from "../../components/common/SortSelect";
import useSort from "../../hooks/useSort";

function Stores() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("");
  const sortedStores = useSort(filteredData, sortBy);
  const {
    data: stores,

    loading,

    refresh,
  } = useFetch(getStores);

  const {
    search,

    setSearch,

    filteredData,
  } = useSearch(
    stores,

    ["name", "email", "address"],
  );

  const [openModal, setOpenModal] = useState(false);

  if (loading) {
    return <Loader />;
  }

  const columns = [
    {
      label: "Store",
      key: "name",
    },

    {
      label: "Email",
      key: "email",
    },

    {
      label: "Address",
      key: "address",
    },

    {
      label: "Rating",
      key: "rating",
    },
  ];

  return (
    <DashboardLayout links={adminLinks}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Stores</h1>

        <div className="flex gap-4">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Store"
          />
          <SortSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            options={[
              {
                label: "Sort by",
                value: "",
              },

              {
                label: "Store Name",
                value: "name",
              },

              {
                label: "Email",
                value: "email",
              },
            ]}
          />

          <Button onClick={() => setOpenModal(true)}>Add Store</Button>
        </div>
      </div>

      <CommonTable
        columns={columns}
        data={sortedStores}
        actions={(store) => (
          <button
            onClick={() => navigate(`/admin/stores/${store.id}`)}
            className="
                bg-indigo-600
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-indigo-700
            "
          >
            View
          </button>
        )}
      />

      <AddStoreModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={refresh}
      />
    </DashboardLayout>
  );
}

export default Stores;
