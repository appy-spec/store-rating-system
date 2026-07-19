const db = require("../config/db");

const getAllStores = async (userId) => {
  const [rows] = await db.execute(
    `SELECT
            s.id,
            s.name,
            s.email,
            s.address,
            ROUND(AVG(r.rating),2) AS overallRating,
            (
                SELECT rating
                FROM ratings
                WHERE user_id = ?
                AND store_id = s.id
            ) AS userRating
        FROM stores s
        LEFT JOIN ratings r
            ON s.id = r.store_id
        GROUP BY s.id
        ORDER BY s.name ASC`,
    [userId],
  );

  return rows;
};

const searchStores = async (userId, name = "", address = "", sort = "ASC") => {
  const order = sort.toUpperCase() === "DESC" ? "DESC" : "ASC";

  const [rows] = await db.execute(
    `SELECT
            s.id,
            s.name,
            s.email,
            s.address,
            ROUND(AVG(r.rating),2) AS overallRating,
            (
                SELECT rating
                FROM ratings
                WHERE user_id = ?
                AND store_id = s.id
            ) AS userRating
        FROM stores s
        LEFT JOIN ratings r
            ON s.id = r.store_id
        WHERE
            s.name LIKE ?
        AND
            s.address LIKE ?
        GROUP BY s.id
        ORDER BY s.name ${order}`,
    [userId, `%${name}%`, `%${address}%`],
  );

  return rows;
};

const getStoreById = async (storeId) => {
  const [rows] = await db.execute(
    `SELECT
            s.id,
            s.name,
            s.email,
            s.address,
            ROUND(AVG(r.rating),2) AS overallRating
        FROM stores s
        LEFT JOIN ratings r
            ON s.id = r.store_id
        WHERE s.id = ?
        GROUP BY s.id`,
    [storeId],
  );

  return rows[0];
};

const getUserRating = async (userId, storeId) => {
  const [rows] = await db.execute(
    `SELECT rating
        FROM ratings
        WHERE user_id = ?
        AND store_id = ?`,
    [userId, storeId],
  );

  return rows[0];
};

module.exports = {
  getAllStores,
  searchStores,
  getStoreById,
  getUserRating
};
