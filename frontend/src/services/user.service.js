import api from "../api/axios";

export const getProfile = () => api.get("/user/profile");

export const changePassword = (data) => api.put("/users/password", data);
