import { Link } from "react-router-dom";

const Soap = ({ soap }) => {
	return (
		<Link to={`/soaps/${soap.id}`}>
			<div className="card">
				<img src={soap.image} alt={soap.name} />
				<p>{soap.name}</p>
				<p>USD$ {soap.price}</p>
			</div>
		</Link>
	);
};

export default Soap;
