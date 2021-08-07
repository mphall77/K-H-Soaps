// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const soapController = require("./controllers/soapController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

//SOAPS ROUTE
app.use("/soaps", soapController);

// INDEX Route
app.get("/", (_, res) => {
	res.send("Welcome to the Soap Bar!");
});

// EXPORT
module.exports = app;
