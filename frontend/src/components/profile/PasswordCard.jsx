import { useState } from "react";
import { toast } from "react-toastify";

import Input from "../common/Input";
import Button from "../common/Button";
import { changePassword } from "../../services/user.service";

function PasswordCard() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.currentPassword) {
      return toast.error("Current password is required.");
    }

    if (!formData.newPassword) {
      return toast.error("New password is required.");
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

    if (!passwordRegex.test(formData.newPassword)) {
      return toast.error(
        "Password must contain one uppercase letter and one special character.",
      );
    }

    try {
      setLoading(true);

      await changePassword(formData);

      toast.success("Password updated successfully.");

      setFormData({
        currentPassword: "",
        newPassword: "",
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Unable to update password.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <form onSubmit={handleSubmit}>
        <Input
          label="Current Password"
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          placeholder="Enter current password"
        />

        <Input
          label="New Password"
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="Enter new password"
        />

        <Button type="submit" className="w-full mt-6">
          {loading ? "Updating..." : "Update Password"}
        </Button>
      </form>
    </div>
  );
}

export default PasswordCard;
