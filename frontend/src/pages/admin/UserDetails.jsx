import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import { adminLinks } from "../../utils/sidebarLinks";
import Card from "../../components/common/Card";
import Loader from "../../components/common/Loader";
import Badge from "../../components/common/Badge";
import { getUserDetails } from "../../services/admin.service";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await getUserDetails(id);

      setUser(response.data.data);
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
      <h1 className="text-3xl font-bold mb-8">User Details</h1>

      <Card className="max-w-3xl">
        <div className="space-y-6">
          <div>
            <p className="text-gray-500">Full Name</p>

            <h2 className="text-2xl font-bold">{user.name}</h2>
          </div>

          <div>
            <p className="text-gray-500">Email</p>

            <p>{user.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Address</p>

            <p>{user.address}</p>
          </div>

          <div>
            <p className="text-gray-500">Role</p>

            <Badge role={user.role} />
          </div>

          <div>
            <p className="text-gray-500">Joined On</p>

            <p>{new Date(user.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
}

export default UserDetails;
