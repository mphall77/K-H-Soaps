import { NavLink } from "react-router-dom";
import logo from "../images/Kamil Logo.jpg";
import styled from "styled-components";
import Button from "./Button";

const Navbar = () => {
	return (
		<header>
			<h4>SALE! 15% off purchases of $60 or more. </h4>
			<NavWrapper className="navbar-expand-sm navbar-dark ">
				<NavLink to="/" className="nav-link">
					<img src={logo} alt="logo" className="nav-img" />
				</NavLink>

				<ul className="navbar-nav align-items-center nav flex-column">
					<li className="nav-item ml-5">
						<NavLink to="/soaps" className="nav-link">
							about
						</NavLink>
					</li>
					<li className="nav-item ml-5">
						<NavLink to="/soaps" className="nav-link">
							soaps
						</NavLink>
					</li>
					<li className="nav-item ml-5">
						<NavLink to="/soaps" className="nav-link">
							candles
						</NavLink>
					</li>
					<li className="nav-item ml-5">
						<NavLink to="/soaps" className="nav-link">
							events
						</NavLink>
					</li>
					<li className="nav-item ">
						<NavLink to="/cart" className="nav-link">
							<Button>
								<span className="mr-2">
									<i class="fas fa-cart-plus"> my cart</i>
								</span>
							</Button>
						</NavLink>
					</li>
				</ul>
			</NavWrapper>
		</header>
	);
};

const NavWrapper = styled.nav`
	background: var(--mainWhite);
	.nav-link {
		color: var(--mainGrey) !important;
		font-size: 1.3rem;
	}
`;

export default Navbar;
