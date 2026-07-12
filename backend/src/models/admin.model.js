const db = require("../config/db");

const getDashboardStats = async () => {
  const [[users]] = await db.execute(
    "SELECT COUNT(*) AS totalUsers FROM users",
  );

  const [[stores]] = await db.execute(
    "SELECT COUNT(*) AS totalStores FROM stores",
  );

  const [[ratings]] = await db.execute(
    "SELECT COUNT(*) AS totalRatings FROM ratings",
  );

  return {
    totalUsers: users.totalUsers,
    totalStores: stores.totalStores,
    totalRatings: ratings.totalRatings,
  };
};

const createUser = async ({ name, email, password, address, role }) => {
  const [result] = await db.execute(
    `INSERT INTO users
        (name,email,password,address,role)
        VALUES (?,?,?,?,?)`,
    [name, email, password, address, role],
  );

  return result;
};

const getUserByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email=?", [email]);

  return rows[0];
};

const getUsers = async () => {
  const [rows] = await db.execute(
    `SELECT
            id,
            name,
            email,
            address,
            role,
            created_at
        FROM users
        ORDER BY created_at DESC`,
  );

  return rows;
};

const getStores = async () => {
  const [rows] = await db.execute(
    `SELECT
            s.id,
            s.name,
            s.email,
            s.address,
            ROUND(AVG(r.rating),2) AS rating
        FROM stores s
        LEFT JOIN ratings r
        ON s.id=r.store_id
        GROUP BY s.id
        ORDER BY s.created_at DESC`,
  );

  return rows;
};

const createStore = async ({ name, email, address, owner_id }) => {
  const [result] = await db.execute(
    `INSERT INTO stores
        (name,email,address,owner_id)
        VALUES (?,?,?,?)`,
    [name, email, address, owner_id],
  );

  return result;
};

const getUserById = async (id) => {
  const [rows] = await db.execute(
    `SELECT
            id,
            name,
            email,
            address,
            role,
            created_at
        FROM users
        WHERE id = ?`,
    [id],
  );

  return rows[0];
};

const getStoreOwnerRating = async (ownerId) => {
  const [[row]] = await db.execute(
    `SELECT
            ROUND(AVG(r.rating),2) AS rating
        FROM stores s
        LEFT JOIN ratings r
            ON s.id = r.store_id
        WHERE s.owner_id = ?`,
    [ownerId],
  );

  return row.rating;
};

const getFilteredUsers = async (name, email, address, role, sort = "ASC") => {
  const [rows] = await db.execute(
    `SELECT
            id,
            name,
            email,
            address,
            role
        FROM users
        WHERE
            name LIKE ?
        AND
            email LIKE ?
        AND
            address LIKE ?
        AND
            role LIKE ?
        ORDER BY name ${sort}`,
    [`%${name}%`, `%${email}%`, `%${address}%`, `%${role}%`],
  );

  return rows;
};

const getFilteredStores = async (name, email, address, sort = "ASC") => {
  const [rows] = await db.execute(
    `SELECT
            s.id,
            s.name,
            s.email,
            s.address,
            ROUND(AVG(r.rating),2) AS rating
        FROM stores s
        LEFT JOIN ratings r
            ON s.id = r.store_id
        WHERE
            s.name LIKE ?
        AND
            s.email LIKE ?
        AND
            s.address LIKE ?
        GROUP BY s.id
        ORDER BY s.name ${sort}`,
    [`%${name}%`, `%${email}%`, `%${address}%`],
  );

  return rows;
};

module.exports = {
  getDashboardStats,
  createUser,
  getUserByEmail,
  getUsers,
  getStores,
  createStore,
  getUserById,
  getStoreOwnerRating,
  getFilteredUsers,
  getFilteredStores,
};
