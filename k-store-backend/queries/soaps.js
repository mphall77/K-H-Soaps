const db = require("../db/dbConfig.js");

const getAllSoaps = async () => {
	try {
		return await db.any("SELECT * FROM soaps");
	} catch (err) {
		return err;
	}
};

module.exports = { getAllSoaps };
