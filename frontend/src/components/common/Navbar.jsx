import { FaBell, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logoutUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();

      toast.success("Logged out successfully.");

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      toast.error("Logout failed.");
    }
  };

  return (
    <header
      className="
        bg-white
        shadow-sm
        px-8
        py-5
        flex
        items-center
        justify-between
      "
    >
      <div>
        <h1 className="text-2xl font-bold text-indigo-600">
          Store Rating System
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <button
          className="
            text-gray-600
            hover:text-indigo-600
            text-xl
          "
        >
          <FaBell />
        </button>

        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-indigo-600" />

          <div>
            <p className="font-semibold">{user?.name}</p>

            <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
            rounded-lg
            bg-red-500
            px-4
            py-2
            text-white
            hover:bg-red-600
            transition
          "
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
