import React, { Component } from 'react';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import   UserLogOut from './components/UserLogOut/UserLogOut';  // fixed logout import to proper import
import ProfilePage from './pages/ProfilePage/ProfilePage'

//styles

import { GlobalStyle } from './GlobalStyles';

export default class App extends Component {
	state = {
		user:null,
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

	handelLogOut = () => {
		localStorage.removeItem('token');
		this.setState({ user: null});  // remove the name and and email from local storage 
	};

	render() {
		return (
			<div className="App">
				<GlobalStyle />
				{this.state.user ? (
					<div>
				<UserLogOut 
											handelLogOut= {this.handelLogOut}
											name={this.state.name}
											email={this.state.email} />
						<Switch>
							<Route path="/project" render={(props) => <ProjectPage {...props} />} />
							<Route path= '/profile'  render={(props) => <ProfilePage {...props} />} /> 
							<Redirect to="/project" />
						</Switch>
					</div>
				) : (
					<Route>
						<AuthPage setUserInState={this.setUserInState} />
					</Route>
				)}
			</div>
		);
	}
}
