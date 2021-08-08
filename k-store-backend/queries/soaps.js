const db = require("../db/dbConfig.js");

const getAllSoaps = async () => {
	try {
		const allSoaps = await db.any("SELECT * FROM soaps");
		console.log(allSoaps);
		return allSoaps;
	} catch (err) {
		return err;
	}
};

const getSoap = async () => {
	try {
		return await db.one("SELECT * FROM soaps WHERE id = $1", id);
	} catch (err) {
		return err;
	}
};

const createSoap = async () => {
	try {
		return await db.one(
			"INSERT INTO soaps(name, image, description, price)VALUES($1, $2, $3, $4) RETURNING *",
			[soap.name, soap.image, soap.description, soap.price]
		);
	} catch (err) {
		return err;
	}
};

const updateSoap = async (id) => {
	try {
		const { name, image, description, price } = soap;
		return await db.one(
			"UPDATE soaps SET name =$1, image = $2, description =$3, price =$4 WHERE id = $5 RETURNING *",
			[name, image, description, price, id]
		);
	} catch (err) {
		return err;
	}
};

const deleteSoap = async (id) => {
	try {
		return await db.one("DELETE FROM soaps WHERE id = $1 RETURNING *", id);
	} catch (err) {
		return err;
	}
};

module.exports = { getAllSoaps, getSoap, updateSoap, createSoap, deleteSoap };
