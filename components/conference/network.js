const response = require("../../network/response");
const express = require("express");
const Controller = require("./index");

const router = express.Router();

router.get("/", get);

//Internal middleware
function get(req, res, next) {
  Controller.get()
    .then((conference) => {
      response.success(req, res, conference, 200);
    })
    .catch(next);
}

module.exports = router;
