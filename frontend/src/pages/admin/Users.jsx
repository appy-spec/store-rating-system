import { useEffect, useState } from "react";
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
import useFetch from "../../hooks/useFetch";
import useSearch from "../../hooks/useSearch";
import SortSelect from "../../components/common/SortSelect";
import useSort from "../../hooks/useSort";

function Users() {
  const navigate = useNavigate();
  const { data: users, loading, refresh } = useFetch(getUsers);

  const {
    search,
    setSearch,
    filteredData: filteredUsers,
  } = useSearch(users, ["name", "email", "role", "address"]);

  const [sortBy, setSortBy] = useState("");
  const sortedUsers = useSort(filteredUsers, sortBy);

  useEffect(() => {
    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.role.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredUsers(result);
  }, [search, users]);

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
      <div className="flex justify-between items-center mb-8 gap-4">
        <div className="flex gap-4">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Users..."
          />

          <Button onClick={() => setOpenModal(true)}>Add User</Button>
        </div>
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
              label: "Sort by",
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
          ]}
        />
      </div>

      <CommonTable
        columns={columns}
        data={sortedUsers}
        actions={(user) => (
          <button
            onClick={() => navigate(`/admin/users/${user.id}`)}
            className="
              bg-indigo-600
              text-white
              px-4
              py-2
              rounded-lg
              hover:bg-indigo-700
            "
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
