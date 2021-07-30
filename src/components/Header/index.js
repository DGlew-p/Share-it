import { Component } from 'react';
import ShareItLogo from '../../images/share_it.svg';
import { Wrapper, Content, LogoImg, EmailWrap } from './Header.styles';
// import AuthPage from '../../pages/AuthPage/AuthPage';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';

export default class Header extends Component {
	state = {
		user: null,
		showLogin: true,
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
			<Wrapper>
				<Content>
					<LogoImg src={ShareItLogo} alt="share-it-logo" />
					{/* <AuthPage setUserInState={this.setUserInState} /> */}
					<h3
						onClick={() => this.setState({ showLogin: !this.state.showLogin })}
					>
						{this.state.showLogin ? 'SIGN UP' : 'LOG IN'}
					</h3>
				</Content>
				<EmailWrap>
					{this.state.showLogin ? (
						<LoginForm setUserInState={this.props.setUserInState} />
					) : (
						<SignUpForm setUserInState={this.props.setUserInState} />
					)}
				</EmailWrap>
			</Wrapper>
		);
	}
}
