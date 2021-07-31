// import { Component } from 'react';
// import ShareItLogo from '../../images/share_it.svg';
// import { Wrapper, Content, LogoImg, EmailWrap } from './Header.styles';
// // import AuthPage from '../../pages/AuthPage/AuthPage';
// import LoginForm from '../LoginForm/LoginForm';
// import SignUpForm from '../SignUpForm/SignUpForm';

// export default class Header extends Component {
// 	state = {
// 		user: null,
// 		showLogin: true,
// 	};
// 	setUserInState = (incomingUserData) => {
// 		this.setState({ user: incomingUserData });
// 	};

// 	// when the page refreshes, check localStorage for the user jwt token
// 	componentDidMount() {
// 		let token = localStorage.getItem('token');
// 		console.log(token);
// 	}
// 	if(token) {
// 		// YOU DO: check expiry!
// 		let userDoc = JSON.parse(atob(token.split('.')[1])).user;
// 		// decodeURIComponent(escape(window.atob(// decode jwt token
// 		console.log(userDoc);
// 		this.setState({ user: userDoc });
// 	}

// 	render() {
// 		return (
// 			<Wrapper>
// 				<Content>
// 					<LogoImg src={ShareItLogo} alt="share-it-logo" />
// 					{/* <AuthPage setUserInState={this.setUserInState} /> */}
// 					<h3
// 						onClick={() => this.setState({ showLogin: !this.state.showLogin })}
// 					>
// 						{this.state.showLogin ? 'SIGN UP' : 'LOG IN'}
// 					</h3>
// 				</Content>
// 				<EmailWrap>
// 					{this.state.showLogin ? (
// 						<LoginForm setUserInState={this.props.setUserInState} />
// 					) : (
// 						<SignUpForm setUserInState={this.props.setUserInState} />
// 					)}
// 				</EmailWrap>
// 			</Wrapper>
// 		);
// 	}
// }

// // export default App;
// // render() {
// // 	    return (
// // 	      <main className="App">
// // 	        {/* this ternary operator asks: is there a user in state? */}
// // 	        {/* if yes, they can see our pages: neworder, etc. */}
// // 	        {/* if no(user is null), show them only the <AuthPage> */}
// // 	        { this.state.user ?
// // 	          <Switch>
// // 	            <Route path='/orders/id' render={(props) => (
// // 	              <NewOrderPage {...props}/>
// // 	            )}/>
// // 	            <Route path='/orders' render={(props) => (
// // 	              <OrderHistoryPage {...props}/>
// // 	            )}/>
// // 	            <Redirect to="/orders" />
// // 	          </Switch>
// // 	          :
// // 	          <AuthPage setUserInState={this.setUserInState}/>
// // 	        }
// // 	      </main>
// // 	    );
// // 	  }
// // 	}
