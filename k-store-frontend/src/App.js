import logo from "./images/Kamil Logo.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">column number one</div>
				<div className="col-6">
					<span>
						<i className="fas fa-home"></i>
					</span>
				</div>
			</div>
		</div>
	);
}

export default App;