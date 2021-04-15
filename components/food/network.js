const express = require("express");
const response = require("../../network/response");
const Controller = require("./index");

const router = express.Router();

//routes
router.get("/", getAll);
router.get("/:id", get);

//Internal middleware

//Get all restaurants
function getAll(req, res, next) {
  Controller.getAll()
    .then((restaurants) => {
      response.success(req, res, restaurants, 200);
    })
    .catch(next);
}

//Get a restaurant by ID
function get(req, res, next) {
  Controller.get(req.params.id)
    .then((restaurant) => {
      response.success(req, res, restaurant, 200);
    })
    .catch(next);
}

module.exports = router;
