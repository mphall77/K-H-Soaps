import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import NavBar from "./Components/NavBar";
import FourOFour from "./Components/FourOFour";
import Cart from "./Components/Cart";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import SoapList from "./Components/SoapList";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<main>
					<Switch>
						<Route exact path="/">
							{/* <Home /> */}
							<SoapList />
						</Route>
						<Route exact path="/soaps">
							<Index />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route>

						<Route exact path="/soaps/:id">
							<Show />
						</Route>
						<Route path="*">
							<FourOFour />
						</Route>
					</Switch>
				</main>
			</Router>
		</div>
	);
}

export default App;
