const express = require("express");
const soaps = express.Router();
const queries = require("../queries/soaps");

// INDEX
soaps.get("/", async (_, res) => {
	res.json(await getAllSoaps());
});

// EXPORT
module.exports = soaps;
