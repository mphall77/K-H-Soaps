import { NavLink } from "react-router-dom";
import logo from "../images/Kamil Logo.jpg";

const Navbar = () => {
	return (
		<header>
			<h4>SALE! 15% off purchases of $60 or more. </h4>
			<nav className="navbar-expand-sm navbar-dark ">
				<NavLink to="/">
					<img src={logo} alt="logo" className="nav-img" />
				</NavLink>

				<ul className="navbar-nav align-items-center nav flex-column">
					<li className="nav-item ml-5">
						<NavLink to="/soaps" className="nav-link">
							Shop
						</NavLink>
					</li>
					<li className="nav-item ">
						<NavLink to="/cart" className="nav-link">
							<i class="fas fa-shopping-cart"> My Cart</i>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;

{
	/* <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
	<div className="logo">
		<NavLink to="/">
			<img src={logo} alt="logo" />
		</NavLink>
	</div>
	<NavLink to="/soaps">Shop</NavLink>
	<NavLink to="/cart">
		<i class="fas fa-shopping-cart"></i>
	</NavLink>
</nav>; */
}
