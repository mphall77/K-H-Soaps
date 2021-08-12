import { Link, NavLink } from "react-router-dom";
import logo from "../images/Kamil Logo.jpg";

const Navbar = () => {
	return (
		<header>
			<img src={logo} alt="logo" />
			<nav>
				<NavLink to="/soaps">Shop</NavLink>
				<NavLink to="/soaps">
					<i class="fas fa-shopping-cart"></i>
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
