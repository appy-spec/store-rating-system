import DashboardLayout from "../../layouts/DashboardLayout";

import { userLinks } from "../../utils/sidebarLinks";
import Card from "../../components/common/Card";
import { useAuth } from "../../contexts/AuthContext";

function Dashboard() {
  const {user}=useAuth();

  return (
    <DashboardLayout links={userLinks}>
      <h1 className="text-3xl font-bold">Welcome,</h1>
      <p className="text-xl text-gray-500 mt-2">{user?.name}</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Card>
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="mt-4">{user?.email}</p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Role</h2>
          <p className="mt-4 capitalize">{user?.role}</p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Stores</h2>
          <p className="mt-4">Browse & Rate</p>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
