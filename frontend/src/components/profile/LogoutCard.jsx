import Button from "../common/Button";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const LogoutCard = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {

    await logoutUser();
    navigate("/login");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold">Logout</h2>

      <Button
        className="mt-6 w-full bg-red-600 hover:bg-red-700"
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutCard;
