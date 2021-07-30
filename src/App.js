import React, { Component } from 'react';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
// import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header';

//styles

import { GlobalStyle } from './GlobalStyles';

class App extends Component {
	render() {
		return (
			<div className="App">
				<GlobalStyle />
				<Header />
			</div>
		);
	}
}

export default App;
