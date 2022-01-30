import styled from "styled-components";

const Button = styled.button`
	text-transform: capitalize;
	font-size: 1.2rem;
	color: var(--mainGrey);
	border: 0.1rem solid var(--lightColor);
	border-radius: 0.5rem;
	padding: 0.5rem 0.5rem 0.3rem 0.5rem;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: var(--lightColor);
		color: var(--mainWhite);
	}
	&:focus {
		outline: none;
	}
`;

export default Button;
