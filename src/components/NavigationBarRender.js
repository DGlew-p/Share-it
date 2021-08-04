import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Styles } from './NavigationBar';

export default function NavigationBar() {
	return (
		<React.Fragment>
			<Styles>
				<Navbar expand="lg">
					<Navbar.Brand href="#">Share It</Navbar.Brand>
					{/* <Navbar.Toggle aria-controls="basic-navbar-nav">
						<Navbar.Collapse id="basic-navbar-nav"> */}
					<Nav className="ml-auto">
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
					</Nav>
					{/* </Navbar.Collapse>
					</Navbar.Toggle> */}
				</Navbar>
			</Styles>
		</React.Fragment>
	);
}
