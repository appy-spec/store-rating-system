import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import { ownerLinks } from "../../utils/sidebarLinks";
import Loader from "../../components/common/Loader";
import CommonTable from "../../components/common/CommonTable";
import { getRatings } from "../../services/owner.service";
import SearchBar from "../../components/common/SearchBar";
import SortSelect from "../../components/common/SortSelect";

import useSearch from "../../hooks/useSearch";
import useSort from "../../hooks/useSort";

function Ratings() {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

   const { search, setSearch, filteredData } = useSearch(ratings, [
    "name",
  ]);

  const [sortBy, setSortBy] = useState("");
  const sortedRatings = useSort(filteredData, sortBy);

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const response = await getRatings();

      setRatings(response.data.data);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  const columns = [

    {
      label: "User Name",
      key: "name",

    },
    {
      label: "Rating",
      key: "rating",
    },
    {
      label: "Rating Date",
      key: "created_at",
    }
    
  ];

  return (
    <DashboardLayout links={ownerLinks}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Ratings</h1>

        <div className="flex gap-4">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Users..."
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
                label: "User Name",
                value: "name",
              },
              {
                label: "Rating",
                value: "rating",
              },
              {
                label: "Rating Date",
                value: "created_at",
              },
            ]}
          />
        </div>
      </div>

      <CommonTable columns={columns} data={sortedRatings} />

    </DashboardLayout>
  );
}

export default Ratings;
