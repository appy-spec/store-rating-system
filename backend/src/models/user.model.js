const db = require("../config/db");

const createUser = async (userData) => {
  const { name, email, password, address, role } = userData;

  const sql = `
        INSERT INTO users
        (name, email, password, address, role)
        VALUES (?, ?, ?, ?, ?)
    `;

  const [result] = await db.execute(sql, [
    name,
    email,
    password,
    address,
    role,
  ]);

  return result;
};

const findUserByEmail = async (email) => {
  const sql = `
        SELECT *
        FROM users
        WHERE email = ?
    `;

  const [rows] = await db.execute(sql, [email]);
  return rows[0];
};

const findUserById = async (id) => {
  const sql = `
        SELECT
            id,
            name,
            email,
            password,
            address,
            role,
            created_at
        FROM users
        WHERE id = ?
    `;

  const [rows] = await db.execute(sql, [id]);
  return rows[0];
};

const findUserWithPasswordById = async (id) => {

    const [rows] = await db.execute(
      `SELECT *
      FROM users
      WHERE id=?`,
      [id]
    );

    return rows[0];

};

const updatePassword = async (id, password) => {
  const sql = `
    UPDATE users
    SET password = ?
    WHERE id = ?
  `;

  const [result] = await db.execute(sql, [password, id]);
  return result;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  findUserWithPasswordById,
  updatePassword
};
