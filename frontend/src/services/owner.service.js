import api from "../api/axios";

export const getDashboard = () => api.get("/owner/dashboard");

export const getRatings = () => api.get("/owner/ratings");
