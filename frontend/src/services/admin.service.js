import api from "../api/axios";

export const getDashboardStats = () => api.get("/admin/dashboard");

export const getUsers = () => api.get("/admin/users");

export const getStores = () => api.get("/admin/stores");

export const addUser = (data) => api.post("/admin/users", data);

export const addStore = (data) => api.post("/admin/stores", data);

export const getUserDetails = (id) => api.get(`/admin/users/${id}`);

export const getStoreDetails = (id) => api.get(`/admin/stores/${id}`);
