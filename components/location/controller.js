const TABLE = "conference_information";
const config = require("../../config");

//Dependency Injection
module.exports = function (injectedStore) {
  let store = injectedStore;
  let conferenceName = config.conferenceName;

  async function getAll() {
    return store.getAll(TABLE);
  }

  //Exposed functions
  return {
    getAll,
  };
};
