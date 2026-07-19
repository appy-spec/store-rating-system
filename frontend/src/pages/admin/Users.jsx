import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import { adminLinks } from "../../utils/sidebarLinks";
import { getUsers } from "../../services/admin.service";

import Loader from "../../components/common/Loader";
import CommonTable from "../../components/common/CommonTable";
import SearchBar from "../../components/common/SearchBar";
import Badge from "../../components/common/Badge";
import AddUserModal from "../../components/admin/AddUserModal";
import Button from "../../components/common/Button";
import SortSelect from "../../components/common/SortSelect";

import useFetch from "../../hooks/useFetch";
import useSearch from "../../hooks/useSearch";
import useSort from "../../hooks/useSort";

function Users() {
  const navigate = useNavigate();

  const { data: users = [], loading, refresh } = useFetch(getUsers);

  const [openModal, setOpenModal] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const {
    search,
    setSearch,
    filteredData: filteredUsers,
  } = useSearch(users, ["name", "email", "role", "address"]);

  const sortedUsers = useSort(filteredUsers, sortBy);

  if (loading) {
    return <Loader />;
  }

  const columns = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Role",
      key: "role",
      render: (user) => <Badge role={user.role} />,
    },
    {
      label: "Address",
      key: "address",
    },
  ];

  return (
    <DashboardLayout links={adminLinks}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">Users</h1>

        <div className="flex flex-wrap gap-4">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Users..."
          />
          <SortSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            options={[
              {
                label: "Sort By",
                value: "",
              },
              {
                label: "Name",
                value: "name",
              },
              {
                label: "Email",
                value: "email",
              },
              {
                label: "Role",
                value: "role",
              },
            ]}
          />

          <Button onClick={() => setOpenModal(true)}>Add User</Button>
        </div>
      </div>

      <CommonTable
        columns={columns}
        data={sortedUsers}
        actions={(user) => (
          <button
            onClick={() => navigate(`/admin/users/${user.id}`)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
          >
            View
          </button>
        )}
      />

      <AddUserModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={refresh}
      />
    </DashboardLayout>
  );
}

export default Users;
