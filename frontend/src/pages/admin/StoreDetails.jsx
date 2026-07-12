import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import { adminLinks } from "../../utils/sidebarLinks";
import Loader from "../../components/common/Loader";
import Card from "../../components/common/Card";
import { getStoreDetails } from "../../services/admin.service";

function StoreDetails() {
  const { id } = useParams();

  const [store, setStore] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStore();
  }, []);

  const fetchStore = async () => {
    try {
      const response = await getStoreDetails(id);

      setStore(response.data.data);
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
      <h1 className="text-3xl font-bold mb-8">Store Details</h1>

      <Card className="max-w-3xl">
        <div className="space-y-6">
          <div>
            <p className="text-gray-500">Store Name</p>

            <h2 className="text-2xl font-bold">{store.name}</h2>
          </div>

          <div>
            <p className="text-gray-500">Email</p>

            <p>{store.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Address</p>

            <p>{store.address}</p>
          </div>

          <div>
            <p className="text-gray-500">Average Rating</p>

            <p className="text-2xl font-bold text-yellow-500">
              ⭐ {store.rating ?? "No Ratings"}
            </p>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
}

export default StoreDetails;
