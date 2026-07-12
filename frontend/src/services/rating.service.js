import api from "../api/axios";

export const getStores = (params = {}) =>
  api.get("/user/stores", {
    params,
  });

export const submitRating = (data) => api.post("/ratings", data);

export const updateRating = (storeId, data) =>
  api.put(`/ratings/${storeId}`, data);
