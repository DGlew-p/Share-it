import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import ShareItLogo from '../../images/share_it.svg';
import { Wrapper, Content, LogoImg, EmailWrap } from './AuthPage.styles';

export default class AuthPage extends React.Component {
    state = {
      showLogin: true,
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