import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { signup } from "../../services/auth.service";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
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

      if (formData.name.length < 20 || formData.name.length > 60) {
        setLoading(false);
        return toast.error("Name must be between 20 and 60 characters.");
      }

      if (formData.address.length > 400) {
        setLoading(false);
        return toast.error("Address cannot exceed 400 characters.");
      }

      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

      if (!passwordRegex.test(formData.password)) {
        setLoading(false);
        return toast.error(
          "Password must contain one uppercase letter and one special character.",
        );
      }

      await signup(formData);
      toast.success("Registration Successful");
      navigate("/login");
      
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create Account" subtitle="Register as a Normal User">
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Full Name"
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <Input
          label="Address"
          textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter Address"
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
          {loading ? "Creating Account..." : "Register"}
        </Button>
      </form>

      <p className="text-center mt-6">
        Already have an account?
        <Link to="/login" className="text-indigo-600 font-semibold ml-2">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Signup;
