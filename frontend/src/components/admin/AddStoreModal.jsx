import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";

import { addStore, getUsers } from "../../services/admin.service";

const AddStoreModal = ({ isOpen, onClose, onSuccess }) => {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    owner_id: "",
  });

  useEffect(() => {
    if (isOpen) {
      fetchOwners();
    }
  }, [isOpen]);

  const fetchOwners = async () => {
    try {
      const response = await getUsers();

      const ownersOnly = response.data.data.filter(
        (user) => user.role === "owner",
      );

      setOwners(ownersOnly);
    } catch (error) {
      console.log(error);
    }
  };

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

      await addStore(formData);

      toast.success("Store Created Successfully");

      onSuccess();

      onClose();

      setFormData({
        name: "",
        email: "",
        address: "",
        owner_id: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unable to create store");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Store">
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Store Name"
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

        <div>
          <label className="font-medium">Store Owner</label>

          <select
            name="owner_id"
            value={formData.owner_id}
            onChange={handleChange}
            className="w-full mt-2 border rounded-xl p-3"
          >
            <option value="">Select Owner</option>

            {owners.map((owner) => (
              <option key={owner.id} value={owner.id}>
                {owner.name}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" className="w-full">
          {loading ? "Creating..." : "Create Store"}
        </Button>
      </form>
    </Modal>
  );
};

export default AddStoreModal;
