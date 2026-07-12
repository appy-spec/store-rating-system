import { FaUsers, FaStore, FaStar } from "react-icons/fa";
import StatCard from "../common/StatCard";

const DashboardCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard
        title="Total Users"
        value={stats.totalUsers}
        icon={<FaUsers className="text-indigo-600" />}
      />

      <StatCard
        title="Total Stores"
        value={stats.totalStores}
        icon={<FaStore className="text-green-600" />}
      />

      <StatCard
        title="Total Ratings"
        value={stats.totalRatings}
        icon={<FaStar className="text-yellow-500" />}
      />
    </div>
  );
};

export default DashboardCards;
