import DashboardLayout from "../../layouts/DashboardLayout";
import PasswordCard from "../../components/profile/PasswordCard";
import { useAuth } from "../../contexts/AuthContext";
import { adminLinks, ownerLinks, userLinks } from "../../utils/sidebarLinks";

function ChangePassword() {
  const { user } = useAuth();

  const getLinks = () => {
    if (user?.role === "admin") return adminLinks;
    if (user?.role === "owner") return ownerLinks;
    return userLinks;
  };

  return (
    <DashboardLayout links={getLinks()}>
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Change Password</h1>

        <PasswordCard />
      </div>
    </DashboardLayout>
  );
}

export default ChangePassword;
