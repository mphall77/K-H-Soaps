import axios from "axios";
import { useState, useEffect } from "react";
import Soap from "./Soap";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const SoapList = () => {
	const [soaps, setSoaps] = useState([]);

	const fetchSoaps = async () => {
		try {
			const res = await axios.get(`${API}/soaps`);
			console.log("RES", res.data);
			setSoaps(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchSoaps();
	}, []);

	return (
		<div className="card-container">
			{soaps.map((soap) => {
				return <Soap key={soap.id} soap={soap} />;
			})}
		</div>
	);
};

export default SoapList;
