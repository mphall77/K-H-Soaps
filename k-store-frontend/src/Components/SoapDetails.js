import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const SoapDetails = () => {
	const [soap, setSoap] = useState({});
	let { id } = useParams();
	// let history = useHistory();

	useEffect(() => {
		const fetchSoap = async () => {
			try {
				const res = await axios.get(`${API}/soaps/${id}`);
				setSoap(res.data.payload);
			} catch (err) {
				console.log(err);
			}
		};
		fetchSoap();
	}, [id]);

	return (
		<section>
			<div>
				<h2>{soap.name}</h2>
				<h5>USD ${soap.price}</h5>
			</div>
			<div>
				<img src={soap.image} alt={soap.name} />
				<p>{soap.description}</p>
			</div>
			<form>
				<label htmlFor="">
					<input type="number" value="" />
				</label>
				<label htmlFor=""></label>
				<input type="button" value="add to cart" />
			</form>
			<Link to={`/soaps`}>
				<button type="button" className="btn btn-primary">
					Back
				</button>
			</Link>
			<Button>Test</Button>
		</section>
	);
};

export default SoapDetails;
