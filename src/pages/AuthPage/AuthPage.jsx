import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import ShareItLogo from '../../images/share_it.svg';
import { Wrapper, Content, LogoImg, EmailWrap, LogLink, HeroImg } from './AuthPage.styles';
export default class AuthPage extends React.Component {
    state = {
      showLogin: true,
    }
  
    render() {
      return (
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
                    <div>
                        <h1>Making Your Projects is Hard, Sharing Them Has Never Been Easier!</h1>
                    </div>
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
