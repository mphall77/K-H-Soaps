import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import NavBar from "./Components/NavBar";
import FourOFour from "./Components/FourOFour";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				{/* <img src={logo} alt="logo" /> */}
				<main>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/soaps">
							<Index />
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
