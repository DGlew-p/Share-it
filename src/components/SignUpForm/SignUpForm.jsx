
import { Component } from 'react';
import { Wrapper, Input, Button } from '../LoginForm/Login.styles';  



export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
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
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password,})
      })
      console.log(fetchResponse);
      
      if (!fetchResponse.ok) this.setState({error: "We are broken"});
      
      let token = await fetchResponse.json()
      console.log(token);
      localStorage.setItem('token', token);
      
      const userDoc = JSON.parse(atob(token.split('.')[1])).user;
      console.log(userDoc);
      this.props.setUserInState(userDoc)
      
        } catch (err) {
       }
}

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <Wrapper>
              <label>Name</label>
              <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              <label>Email</label>
              <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
              <label>Password</label>
              <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              <label>Confirm</label>
              <Input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              <Button type="submit"  disabled={disable}>SIGN UP</Button>
            </Wrapper>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </>
    );
  }
}
