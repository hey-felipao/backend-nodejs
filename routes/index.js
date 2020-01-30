const routes = require("express").Router();
const cors = require("cors");

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = routes;
