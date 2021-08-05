import styled from 'styled-components';
import { FaRegShareSquare } from 'react-icons/fa';
import { Container } from '../GlobalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: red;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavBarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 10vh;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled(FaRegShareSquare)`
	height: 5em;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px);
`;
