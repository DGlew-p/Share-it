import {Component} from 'react';
import { Wrapper, Input } from '../LoginForm/Login.styles';  

export default class ProfileForm extends Component {
  state = {
    bio: '',
    location: '',
    skills: '', 
    image: '',
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
        try {
      const fetchResponse = await fetch('/api/', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ bio: this.state.bio, location: this.state.location,skills: this.state.skills,image:this.state.image,})
      })
      console.log(fetchResponse);
      
      // if (!fetchResponse.ok) this.setState({error: "We are broken"});
      
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
return (
      <>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <Wrapper>
            
              <label>Location</label>
              <Input type="location" name="location" value={this.state.location} onChange={this.handleChange} required />
              <label>Bio</label>
              <Input type="bio" name="bio" value={this.state.bio} onChange={this.handleChange} required />
               <label>Skills</label>
              <Input type="skills" name="skills" value={this.state.skills} onChange={this.handleChange} required />
                 <label>Image</label>
              <Input type="image" name="image" value={this.state.image} onChange={this.handleChange} required />
              <button type="submit"  >REGISTER PROFILE</button>
            </Wrapper>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </>
    );
  }
}
