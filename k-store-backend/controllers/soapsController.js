const express = require("express");
const soaps = express.Router();
const queries = require("../queries/soaps");

// INDEX
soaps.get("/", async (_, res) => {
	res.json(await queries.getAllSoaps());
});

// SHOW
soaps.get("/:id", async (req, res) => {
	const { id } = req.params;
	const soap = await queries.getSoap(id);
	res.json({ success: true, payload: soap });
});

// DELETE
soaps.delete("/id", async (req, res) => {
	const deletedSoap = await deletedSoap(req.params);
	if (!!deletedSoap.id) {
		res.json({ success: true, payload: deletedSoap });
	} else {
		res.status(404).json({ success: false, payload: deletedSoap });
	}
});

// CREATE
soaps.post("/", async (req, res) => {
	const newSoap = await createSoap(req.body);
	res.json({ success: true, payload: newSoap });
});

// UPDATE
soaps.put("/:id", async (req, res) => {
	const { body, params } = req;
	const { name, image, description, price } = body;
	if (!name || !image || !description || !price) {
		res.status(422).json({
			error: true,
			success: false,
			message: "Missing information, try again.",
		});
	} else {
		const updatedSoap = await updateSoap(params.id, body);
		res.json({ success: true, payload: updatedSoap });
	}
});

module.exports = soaps;
