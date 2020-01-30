const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//chamar rota para pasta rota
app.use("/", require("../routes"));

app.set("port", process.env.APP_PORT || 5000);

module.exports = { app };
