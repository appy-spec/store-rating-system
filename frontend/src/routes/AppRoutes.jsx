import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/common/ProtectedRoute";
import RoleRoute from "../components/common/RoleRoute";

import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import Signup from "../pages/public/Signup";

import AdminDashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Stores from "../pages/admin/Stores";
import AdminProfile from "../pages/admin/Profile";
import UserDetails from "../pages/admin/UserDetails";
import StoreDetails from "../pages/admin/StoreDetails";

import UserDashboard from "../pages/user/Dashboard";
import UserStores from "../pages/user/Stores";
import UserProfile from "../pages/user/Profile";

import OwnerDashboard from "../pages/owner/Dashboard";
import OwnerProfile from "../pages/owner/Profile";
import OwnerRatings from "../pages/owner/Ratings";

import ChangePassword from "../pages/shared/ChangePassword";
import NotFound from "../pages/errors/NotFound";
import Unauthorized from "../pages/errors/Unauthorized";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["admin"]}>
                <Users />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users/:id"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["admin"]}>
                <UserDetails />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/stores"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["admin"]}>
                <Stores />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/stores/:id"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["admin"]}>
                <StoreDetails />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/profile"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["admin"]}>
                <AdminProfile />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <UserDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/stores"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <UserStores />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/profile"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <UserProfile />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/user/password"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <ChangePassword />
              </RoleRoute>
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/owner"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["owner"]}>
                <OwnerDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/profile"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["owner"]}>
                <OwnerProfile />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/owner/password"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["owner"]}>
                <ChangeOwnerPassword />
              </RoleRoute>
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/owner/ratings"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["owner"]}>
                <OwnerRatings />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
