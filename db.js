const connect = async () => {
  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(
    "mysql://root:@localhost/finance"
  );
  console.log("MySQL is connected");

  return connection;
};

const selectUsers = async () => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM users");

  connection.end();

  return rows;
};

const selectUser = async (id) => {
  const connection = await connect();
  const sql = "SELECT * FROM users WHERE id = ?";
  const [rows] = await connection.query(sql, id);

  connection.end();

  return rows;
};

const insertUser = async (user) => {
  const connection = await connect();
  const sql = "INSERT INTO users (name, age, cpf) VALUES (?, ?, ?)";
  const values = [user.name, user.age, user.cpf];
  const [rows] = await connection.query(sql, values);

  connection.end();

  return rows;
};

const updateUser = async (id, user) => {
  const connection = await connect();
  const sql = "UPDATE users SET name = ?, age = ?, cpf = ? WHERE id = ?";
  const values = [user.name, user.age, user.cpf, id];
  const [rows] = await connection.query(sql, values);

  connection.end();

  return rows;
};

const deleteUser = async (id) => {
  const connection = await connect();
  const sql = "DELETE FROM users WHERE id = ?";
  const [rows] = await connection.query(sql, id);

  connection.end();

  return rows;
};

module.exports = {
  selectUsers,
  selectUser,
  insertUser,
  updateUser,
  deleteUser,
};
