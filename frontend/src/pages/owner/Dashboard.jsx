import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import { ownerLinks } from "../../utils/sidebarLinks";
import Card from "../../components/common/Card";
import Loader from "../../components/common/Loader";
import RatingOverview from "../../components/owner/RatingOverview";
import { getDashboard } from "../../services/owner.service";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await getDashboard();

      setData(response.data.data);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <DashboardLayout links={ownerLinks}>
      <h1 className="text-3xl font-bold mb-8">Owner Dashboard</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-xl font-bold mb-4">Store Information</h2>

          <p>
            <strong>Name:</strong>

            {data.store.name}
          </p>

          <p className="mt-3">
            <strong>Email:</strong>

            {data.store.email}
          </p>

          <p className="mt-3">
            <strong>Address:</strong>

            {data.store.address}
          </p>
        </Card>

        <RatingOverview averageRating={data.averageRating} />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
