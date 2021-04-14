const TABLE = "conference";
const config = require("../../config");

//Dependency Injection
module.exports = function (injectedStore) {
  let store = injectedStore;
  let conferenceName = config.conferenceName;
  async function get() {
    return store.get(TABLE, "name", conferenceName);
  }

  //Exposed functions
  return {
    get,
  };
};
