require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");

const config = require("./config");
const conference = require("./components/conference/network");
const hotel = require("./components/hotel/network");
const food = require("./components/food/network");
const location = require("./components/location/netwotk");
const errors = require("./network/errors");
const swaggerDoc = require("./swagger.json");

const app = express();

//middleware
app.use(express.json());

//router
app.use("/", conference);
app.use("/hotel", hotel);
app.use("/food", food);
app.use("/location", location);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(errors);

app.listen(process.env.PORT || config.api.port, () => {
  console.log("API listening on port: ", config.api.port);
});
