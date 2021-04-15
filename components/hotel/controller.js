const TABLE = "hotel";
const FIELD = "id";

//Dependency Injection
module.exports = function (injectedStore) {
  let store = injectedStore;

  //Get all the hotels
  async function getAll() {
    return store.getAll(TABLE);
  }

  //Get one hotel by ID
  async function get(id) {
    return store.get(TABLE, FIELD, id);
  }

  //Exposed functions
  return {
    getAll,
    get,
  };
};
