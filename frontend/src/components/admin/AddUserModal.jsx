import { useState } from "react";
import { toast } from "react-toastify";

import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";

import { addUser } from "../../services/admin.service";

const AddUserModal = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.length < 20 || formData.name.length > 60) {
      return toast.error("Name must be between 20 and 60 characters.");
    }

    if (formData.address.length > 400) {
      return toast.error("Address cannot exceed 400 characters.");
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

    if (!passwordRegex.test(formData.password)) {
      return toast.error(
        "Password must contain one uppercase letter and one special character.",
      );
    }

    try {
      setLoading(true);

      await addUser(formData);

      toast.success("User Created Successfully");

      onSuccess();

      onClose();

      setFormData({
        name: "",
        email: "",
        address: "",
        password: "",
        role: "user",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unable to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} title="Create New User" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Address"
          textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <div>
          <label className="font-medium">Role</label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="
                            w-full
                            mt-2
                            border
                            rounded-xl
                            p-3
                        "
          >
            <option value="user">Normal User</option>

            <option value="owner">Store Owner</option>

            <option value="admin">Admin</option>
          </select>
        </div>

        <Button type="submit" className="w-full">
          {loading ? "Creating..." : "Create User"}
        </Button>
      </form>
    </Modal>
  );
};

export default AddUserModal;
