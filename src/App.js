import React, { Component } from 'react';
// Add the Route named import
import { Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Logout from './components/UserLogOut/UserLogOut';
import NavigationBar from './components/NavigationBarRender';

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
			let userDoc = JSON.parse(atob(token.split('.')[1])).user; // decode jwt token
			this.setState({ user: userDoc });
		}
	}

	userLogout = () => {
		localStorage.removeItem('token');
		this.setState({ user: null });
	};

	render() {
		return (
			<React.Fragment>
				<GlobalStyle />

				{this.state.user ? (
					<div>
						<Logout userLogout={this.userLogout} />
						<Switch>
							<NavigationBar />
							<Route path="/" render={(props) => <ProjectPage {...props} />} />
						</Switch>
					</div>
				) : (
					<Route>
						<AuthPage setUserInState={this.setUserInState} />
					</Route>
				)}
			</React.Fragment>
		);
	}
}
