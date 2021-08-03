import React, { Component } from 'react';
// Add the Route named import
<<<<<<< HEAD
import { Route, Switch, Redirect} from 'react-router-dom';
=======
import { Route, Switch, Redirect } from 'react-router-dom';
>>>>>>> 73465aa13671c28ac9759c628e49a82233e607b8
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
		let token = localStorage.getItem('token')
		if (token) {
		  let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
		  this.setState({user: userDoc})      
		}
	  }

	handelLogOut = () => {
		localStorage.removeItem('token');
		this.setState({ user: null});  // remove the name and and email from local storage 
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
				  <Route path='/project' render={() => (
					<ProjectPage user={this.state.user} />
				  )}/>
				  <Redirect to="/project" />
				</Switch>

				</div>
=======
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
>>>>>>> 73465aa13671c28ac9759c628e49a82233e607b8
				) : (
					<Route>
						<AuthPage setUserInState={this.setUserInState} />
					</Route>
				)}
			</React.Fragment>
		);
	  }
	}
