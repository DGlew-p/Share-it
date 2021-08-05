import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import ShareItLogo from '../../images/share_it.svg';
import { Wrapper, Content, LogoImg, EmailWrap, LogLink, HeroImg } from './AuthPage.styles';
import { StylesProvider } from "@material-ui/core/styles";
export default class AuthPage extends React.Component {
    state = {
      showLogin: true,
    }
  
    render() {
      return (
    //  <StylesProvider injectFirst>
        <React.Fragment>
        <Wrapper>
            <HeroImg />
            <div>
            <Content>
                <LogoImg src={ShareItLogo} alt="share-it-logo" />
                <h3
                    onClick={() => this.setState({ showLogin: !this.state.showLogin })}
                >
                    {this.state.showLogin ? (<LogLink >Sign Up</LogLink>) : <LogLink >Log In</LogLink>}
                </h3>
            </Content>
            <EmailWrap>
                {this.state.showLogin ? (
                    <LoginForm setUserInState={this.props.setUserInState} />
                ) : (
                    <SignUpForm setUserInState={this.props.setUserInState} />
                )}
            </EmailWrap>
            </div>
        </Wrapper>
        </React.Fragment>
        
      );
    }
  }

  {/* </StylesProvider> */}