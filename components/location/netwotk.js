const express = require("express");
const response = require("../../network/response");
const Controller = require("./index");

const router = express.Router();

//routes
router.get("/", getLocationInfo);

//Internal middleware

//Get location information
function getLocationInfo(req, res, next) {
  Controller.getAll()
    .then((location) => {
      response.success(req, res, location, 200);
    })
    .catch(next);
}

module.exports = router;
