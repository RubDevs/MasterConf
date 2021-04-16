const controller = require("./controller");
const config = require("../../config");

let store;

//Choose DB according to environment
if (config.dev) {
  //Dummy when development
  store = require("../../store/dummy");
} else {
  //Sqlite when production
  store = require("../../store/sqlite");
}

//Dependecy Injection
module.exports = controller(store);
