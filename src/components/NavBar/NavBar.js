import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarFull } from './NavBar.styles';
import '../../css/bulma.css';
import ShareItLogo from '../../images/share_it.svg';
import { LogoImg } from '../../pages/AuthPage/AuthPage.styles';

export default function NavBar(props) {
	return (
		<React.Fragment>
			<NavBarFull className="navbar has-shadow">
				<div className="navbar-brand">
					<LogoImg src={ShareItLogo} alt="" className="py-2 px-2" />
					<div className="navbar-burger">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className="navbar-menu is-active">
					<div className="navbar-end">
						<Link className="navbar-item" to="/all-projects">
							All Projects
						</Link>
						<Link className="navbar-item" to="/new-project">
							Create Project
						</Link>
						<Link className="navbar-item" to="/new-profile">
							Create Profile
						</Link>
						<Link className="navbar-item" to="/all-profiles">
							All Profiles
						</Link>
						<Link className="navbar-item" onClick={props.userLogout}>
							Logout
						</Link>
					</div>
				</div>
			</NavBarFull>
		</React.Fragment>
	);
}
