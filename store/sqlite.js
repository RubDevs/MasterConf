const sqlite = require("sqlite3").verbose();

//Open DB
let connection;
function handleConnection() {
  connection = new sqlite.Database("./masterconf.db", (error) => {
    if (error) {
      return console.error("sqlite error: ", error);
    }
    console.log("Connected to DB");
  });
}

handleConnection();

//CRUD operations
function getAll(table) {
  return new Promise((resolve, reject) => {
    connection.all(`SELECT * FROM ${table}`, (error, data) => {
      if (error) {
        return reject(error);
      }
      resolve(data);
    });
  });
}

function get(table, field, value) {
  return new Promise((resolve, reject) => {
    connection.get(
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

//Close DB
function closeConnection() {
  connection.close((error) => {
    if (error) {
      console.error(error.message);
    }
    console.log("DB closed");
  });
}

module.exports = {
  get,
  getAll,
};
