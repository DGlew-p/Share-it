import React, { Component } from 'react';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import UserLogOut from './components/UserLogOut/UserLogOut';
// import Header from './components/Header';

//styles

import { GlobalStyle } from './GlobalStyles';

export default class App extends Component {
	state = {
		user: null,
	};
	setUserInState = (incomingUserData) => {
		this.setState({ user: incomingUserData });
	};
	// when the page refreshes, check localStorage for the user jwt token
	componentDidMount() {
		let token = localStorage.getItem('token');
		if (token) {
			// YOU DO: check expiry!
			let userDoc = JSON.parse(atob(token.split('.')[1])).user; // decode jwt token
			this.setState({ user: userDoc });
		}
	}
	render() {
		return (
			<main className="App">
		
			  { this.state.user ? 
			  <div>
				<UserLogOut/>
				  <Switch>
				  <Route path='/project' render={(props) => (
					<ProjectPage {...props}/>
				  )}/>
				  <Redirect to="/project" />
				</Switch>

				</div>
				
				:
				<AuthPage setUserInState={this.setUserInState}/>
			  }
			</main>
		);
	  }
	}
