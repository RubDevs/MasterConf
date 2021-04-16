const response = require("../../network/response");
const express = require("express");
const Controller = require("./index");

const router = express.Router();

router.get("/", get);

//Internal middleware
async function get(req, res, next) {
  Controller.get()
    .then(async (conference) => {
      let result = {
        ...conference,
      };
      result["sponsors"] = await Controller.getAll("sponsors");
      response.success(req, res, result, 200);
    })
    .catch(next);
}

module.exports = router;
