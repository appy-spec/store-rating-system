const db = require("../config/db");

const getOwnerStore = async (ownerId) => {
  const [rows] = await db.execute(
    `SELECT id,name,email,address
        FROM stores
        WHERE owner_id = ?`,
    [ownerId],
  );

  return rows[0];
};

const getAverageRating = async (ownerId) => {
  const [[row]] = await db.execute(
    `SELECT
            ROUND(AVG(r.rating),2) AS averageRating
        FROM stores s
        LEFT JOIN ratings r
            ON s.id = r.store_id
        WHERE s.owner_id = ?`,
    [ownerId],
  );

  return row.averageRating;
};

const getUsersWhoRated = async (ownerId) => {
  const [rows] = await db.execute(
    `SELECT
            u.id,
            u.name,
            u.email,
            r.rating,
            r.created_at
        FROM ratings r
        INNER JOIN users u
            ON u.id = r.user_id
        INNER JOIN stores s
            ON s.id = r.store_id
        WHERE s.owner_id = ?
        ORDER BY r.created_at DESC`,
    [ownerId],
  );

  return rows;
};

module.exports = {
  getOwnerStore,
  getAverageRating,
  getUsersWhoRated,
};
