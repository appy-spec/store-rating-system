import DashboardLayout from "../../layouts/DashboardLayout";

import { adminLinks } from "../../utils/sidebarLinks";
import { useAuth } from "../../contexts/AuthContext";
import ProfileCard from "../../components/profile/ProfileCard";
import PasswordCard from "../../components/profile/PasswordCard";

function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout links={adminLinks}>
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <ProfileCard user={user} />
        <PasswordCard />
      </div>

    </DashboardLayout>
  );
}

export default Profile;
