const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ encoding: "utf8" });

const PORT = process.env.PORT || 5000;

//Carregando o Express
const app = express();

app.use(bodyParser.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", require("../routes"));

app.listen(PORT, (req, res) => {
  console.log("App is running at http://localhost:%d", PORT);
});

module.exports = { app };
