import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import { Styles } from './NavigationBar';
import '../../css/bulma.css';
import ShareItLogo from '../../images/share_it.svg';
import { LogoImg } from '../../pages/AuthPage/AuthPage.styles';

export default function NavBar() {
	return (
		<React.Fragment>
			<nav class="navbar"></nav>
			<div className="navbar-brand">
				<LogoImg src={ShareItLogo} alt="" className="py-2 px-2" />
			</div>
			{/* <Navbar expand="lg">
				<Navbar.Brand href="#">Share It</Navbar.Brand> */}
			{/* <Navbar.Toggle aria-controls="basic-navbar-nav">
						<Navbar.Collapse id="basic-navbar-nav"> */}
			{/* <Nav className="ml-auto">
					<Nav.Item>
						<Nav.Link href="/all-projects">All Projects</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/new-project">Create Project</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/new-profile">Create Profile</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/all-profiles">All Profiles</Nav.Link>
					</Nav.Item>
				</Nav> */}
			{/* </Navbar.Collapse>
					</Navbar.Toggle> */}
			{/* </Navbar> */}
		</React.Fragment>
	);
}
