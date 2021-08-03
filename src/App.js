import React, { Component } from 'react';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
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
		let token = localStorage.getItem('token')
		if (token) {
		  let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
		  this.setState({user: userDoc})      
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
<<<<<<< HEAD
					<div>
						<Logout userLogout={this.userLogout} />
						<Switch>
							<Route
								path="/project"
								render={(props) => (
									<ProjectPage {...props} user={this.state.user} />
								)}
							/>
							<Route path="/profile" render={(props) => (<ProfilePage {...props} user={this.state.user})}
							<Redirect to="/project" />
						</Switch>
					</div>
=======
				<div>
			<Logout userLogout={this.userLogout} />
				  <Switch>
				  <Route path='/project' render={() => (
					<ProjectPage user={this.state.user} />
				  )}/>
				  <Redirect to="/project" />
				</Switch>

				</div>
>>>>>>> e193d9b36ff42177b18e807e6d56e7b8fa14db84
				) : (
					<Route>
						<AuthPage setUserInState={this.setUserInState} />
					</Route>
				)}
			</React.Fragment>
		);
	}
}
