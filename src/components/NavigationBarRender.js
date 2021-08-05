import React, { useState } from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
import {
	Nav,
	NavBarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
} from './NavigationBar';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const NavigationBarRender = () => {
	// state = {
	// 	click: false,
	// };

	// handleClickOn = () => {
	// 	this.setState({ click: true });
	// };

	// handleClickOff = () => {
	// 	this.setState({ click: false });
	// };

	// render() {
	// const isClicked = this.state.click;
	// let button;
	// if (isClicked) {
	// 	button = <ClickedOn onClick={this.handleClickOn} />;
	// } else {
	// 	button = <ClickedOff onClick={this.handleClickOff} />;
	// }

	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<React.Fragment>
			<IconContext.Provider value="#fff">
				<Nav>
					<NavBarContainer>
						<NavLogo to="/projects">
							<NavIcon />
							SHARE IT
							<MobileIcon onChange={handleClick}>
								{click ? <FaTimes /> : <FaBars />}
							</MobileIcon>
							{/* <NavMenu onClick={handleClick}>
								<NavItem>
									<NavLinks to="/projects">All Projects</NavLinks>
								</NavItem>
							</NavMenu> */}
						</NavLogo>
					</NavBarContainer>
				</Nav>
			</IconContext.Provider>
		</React.Fragment>
	);
	// }
};

// function ClickedOn(props) {
// 	return <FaBars onClick={props.onClick} />;
// }

// function ClickedOff(props) {
// 	return <NavIcon onClick={props.onClick} />;
// }
export default NavigationBarRender;
