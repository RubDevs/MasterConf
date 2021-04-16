const TABLE = "conference";
const config = require("../../config");

//Dependency Injection
module.exports = function (injectedStore) {
  let store = injectedStore;
  let conferenceName = config.conferenceName;
  async function get() {
    return store.get(TABLE, "name", conferenceName);
  }

  async function getAll(table) {
    return store.getAll(table);
  }

  //Exposed functions
  return {
    get,
    getAll,
  };
};
