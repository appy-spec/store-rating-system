import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";
import { adminLinks } from "../../utils/sidebarLinks";
import Loader from "../../components/common/Loader";
import Card from "../../components/common/Card";
import EmptyState from "../../components/common/EmptyState";
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

  if (!store) {
    return (
      <DashboardLayout links={adminLinks}>
        <EmptyState message="Failed to load Store Details"></EmptyState>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout links={adminLinks}>
      <div className="flex flex-col md:flex-row justify-start items-center gap-4 mb-6">
        <div>
          <button
            onClick={() => window.history.back()}
            className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            <ArrowLeft size={20} />
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-center">Store Details</h1>
      </div>

      <Card className="max-w-3xl">
        <div className="space-y-6">
          <div>
            <p className="text-gray-500">Store Name</p>
            <h2 className="text-2xl font-bold">{store.name}</h2>
          </div>
          <div>
            <p className="text-gray-500">Owner Name</p>
            <p>{store.ownerName}</p>
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
              ⭐ {store.overallRating ?? "No Ratings"}
            </p>
          </div>
           <div>
            <p className="text-gray-500">Created on</p>
            <p>{new Date(store.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
}

export default StoreDetails;
