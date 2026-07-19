const db = require("../config/db");

const getRating = async (userId, storeId) => {
  const [rows] = await db.execute(
    `SELECT *
         FROM ratings
         WHERE user_id = ?
         AND store_id = ?`,
    [userId, storeId],
  );

  return rows[0];
};

const createRating = async (userId, storeId, rating) => {
  const [result] = await db.execute(
    `INSERT INTO ratings
        (user_id, store_id, rating)
        VALUES (?, ?, ?)`,
    [userId, storeId, rating],
  );

  return result;
};

const updateRating = async (userId, storeId, rating) => {
  const [result] = await db.execute(
    `UPDATE ratings
        SET rating = ?
        WHERE user_id = ?
        AND store_id = ?`,
    [rating, userId, storeId],
  );

  return result;
};

module.exports = {
  getRating,
  createRating,
  updateRating,
};
