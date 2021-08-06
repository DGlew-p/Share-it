import React, { Component } from 'react';
import { Wrapper, Input } from './Login.styles';

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.state.email, password: this.state.password, })
      })

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json() // 3. decode fetch response: get jwt token from srv
      localStorage.setItem('token', token);  // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc)

    } catch (err) {
  }
}

  render() {
    return (
      <React.Fragment>
        <div onSubmit={this.handleSubmit}>
          <form autoComplete="on" >
            <Wrapper>
            <label>Email</label>
            <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <button className="button" type="submit">LOG IN</button>
            </Wrapper>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </React.Fragment>
    );
  }
}