const routes = require("express").Router();
const cors = require("cors");
//const customer = require ( './customer' );

//routes.use( '/nome_da_rota', cors(), customer);

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = routes;
