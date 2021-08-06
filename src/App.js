import React, { Component } from 'react';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ProjectForm from './components/ProjectForm/ProjectForm';
import ProfileFormPage from './pages/ProfileFormPage/ProfileFormPage';
import ProfilesPage from './pages/ProfilesPage/ProfilesPage';
import Logout from './components/UserLogOut/UserLogOut';

//styles

import { GlobalStyle } from './GlobalStyles';

export default class App extends Component {
	state = {
		user: null,
	};
	setUserInState = (incomingUserData) => {
		this.setState({ user: incomingUserData });
	};

	componentDidMount() {
		let token = localStorage.getItem('token');
		if (token) {
			// const parseJwt = (token) => {
			// 	try {
			// 		return JSON.parse(atob(token.split('.')[1]));
			// 	} catch (e) {
			// 		return null;
			// 	}
			// };
			let userDoc = JSON.parse(atob(token.split('.')[1])).user; // decode jwt token
			this.setState({ user: userDoc });
		}
	}

	userlogout = () => {
		localStorage.removeItem('token');
		this.setState({ user: null });
	};

	render() {
		return (
			<React.Fragment>
				<GlobalStyle />

				{this.state.user ? (
					<div>
						<Logout userLogout={this.userlogout} />
						<Switch>
							<Route
								path="/all-projects"
								render={() => <ProjectPage user={this.state.user} />}
							/>
							<Route
								path="/new-project"
								render={() => <ProjectForm user={this.state.user} />}
							/>

							<Route
								path="/new-profile"
								render={() => <ProfileFormPage user={this.state.user} />}
							/>
							<Route
								path="/all-profiles"
								render={() => <ProfilesPage user={this.state.user} />}
							/>
							<Redirect to="/all-projects" />
						</Switch>
					</div>
				) : (
					<AuthPage setUserInState={this.setUserInState} />
				)}
			</React.Fragment>
		);
	}
}
