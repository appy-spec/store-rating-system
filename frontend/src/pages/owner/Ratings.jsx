import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import { ownerLinks } from "../../utils/sidebarLinks";
import Loader from "../../components/common/Loader";
import CommonTable from "../../components/common/CommonTable";
import { getRatings } from "../../services/owner.service";

function Ratings() {
  const [ratings, setRatings] = useState([]);

  const [loading, setLoading] = useState(true);

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
      Header: "User",
      accessor: "name",
    },

    {
      Header: "Email",
      accessor: "email",
    },

    {
      Header: "Rating",
      accessor: "rating",
    },
  ];

  return (
    <DashboardLayout links={ownerLinks}>
      <h1 className="text-3xl font-bold mb-8">User Ratings</h1>

      <CommonTable columns={columns} data={ratings} />
    </DashboardLayout>
  );
}

export default Ratings;
