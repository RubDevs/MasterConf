const mysql = require("mysql2");
const debug = require("debug")("app:DB");
const config = require("../config/configuration");

const dbconf = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  port: config.mysql.port,
};

//connection
let connection;

function handleConnection() {
  connection = mysql.createConnection(dbconf);
  connection.connect((error) => {
    if (error) {
      debug(error);
      setTimeout(handleConnection, 2000);
    } else {
      debug("DB Connected");
    }
  });

  connection.on("error", (error) => {
    console.error("[db error]", error);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      handleConnection();
    } else {
      throw error;
    }
  });
}

handleConnection();

//CRUD OPERATIONS
function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
}

function getAll(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (error, data) => {
      if (error) {
        return reject(error);
      }
      resolve(data);
    });
  });
}

function get(table, field, value) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE ${field}= ?`,
      value,
      (error, data) => {
        if (error) {
          return reject(error);
        }
        resolve(data);
      }
    );
  });
}

function update(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET ? WHERE id=?`,
      [data, data.id],
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    );
  });
}

function remove(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${table} WHERE id=?`, id, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
}

module.exports = {
  get,
  getAll,
};
