const cors = require("cors");
const express = require("express");

const soapsController = require("./controllers/soapsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// SOAP Route
app.use("/soaps", soapsController);

// INDEX Route
app.get("/", (_, res) => {
	res.send("Welcome to the Soap Bar.");
});

// 404
app.get("*", (_, res) => {
	res.status(404).send("Page not Found");
});

// EXPORT
module.exports = app;
