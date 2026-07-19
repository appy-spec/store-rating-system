import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import { adminLinks } from "../../utils/sidebarLinks";
import DashboardCards from "../../components/admin/DashboardCards";
import { getDashboardStats } from "../../services/admin.service";
import Loader from "../../components/common/Loader";

function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalStores: 0,
    totalRatings: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await getDashboardStats();

      setStats(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <DashboardLayout links={adminLinks}>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <DashboardCards stats={stats} />
    </DashboardLayout>
  );
}

export default Dashboard;
