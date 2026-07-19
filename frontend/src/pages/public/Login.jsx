import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useAuth } from "../../contexts/AuthContext";
import Footer from "../../components/common/Footer";

function Login() {
  const navigate = useNavigate();

  const { loginUser, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const loggedInUser = await loginUser(formData);
      toast.success("Login Successful");

      if (loggedInUser.role === "admin") {
        navigate("/admin");
      } else if (loggedInUser.role === "owner") {
        navigate("/owner");
      } else {
        navigate("/user");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AuthLayout title="Welcome Back" subtitle="Login to continue">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />

          <Button type="submit" className="w-full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-center mt-6">
          Don't have an account?
          <Link to="/signup" className="text-indigo-600 font-semibold ml-2">
            Register
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
}

export default Login;
