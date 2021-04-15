require("dotenv").config();
const express = require("express");

const config = require("./config");
const conference = require("./components/conference/network");
const hotel = require("./components/hotel/network");
const food = require("./components/food/network");
const errors = require("./network/errors");

const app = express();

//middleware
app.use(express.json());

//router
app.use("/", conference);
app.use("/hotel", hotel);
app.use("/food", food);
app.use(errors);

app.listen(config.api.port, () => {
  console.log("API listening on port: ", config.api.port);
});
