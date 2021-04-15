const express = require("express");
const response = require("../../network/response");
const Controller = require("./index");

const router = express.Router();

//routes
router.get("/", getAll);
router.get("/:id", get);

//Internal middleware

//Get all hotels
function getAll(req, res, next) {
  Controller.getAll()
    .then((hotels) => {
      response.success(req, res, hotels, 200);
    })
    .catch(next);
}

//Get a hotel by ID
function get(req, res, next) {
  Controller.get(req.params.id)
    .then((hotel) => {
      response.success(req, res, hotel, 200);
    })
    .catch(next);
}

module.exports = router;
