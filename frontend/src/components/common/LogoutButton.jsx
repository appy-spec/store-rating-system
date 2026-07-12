import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

function LogoutButton() {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();

      toast.success("Logged out successfully.");

      navigate("/login", {
        replace: true,
      });
    } catch {
      toast.error("Logout failed.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}

export default LogoutButton;
