import api from "../api/axios";

export const getStores = () => api.get("/users/stores");

export const submitRating = (data) => api.post("/ratings", data);

export const updateRating = (data) =>
  api.put(`/ratings/${data.store_id}`, data);
