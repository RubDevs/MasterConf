const controller = require("./controller");
const config = require("../../config");

let store;

//Choose DB according to environment
if (config.dev) {
  //Dummy when development
  store = require("../../store/dummy");
} else {
  //Mysql when production
  store = require("../../store/mysql");
}

//Dependecy Injection
module.exports = controller(store);
