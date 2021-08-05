import React, { Component } from "react";
import { Wrapper, FormLabel } from "../../components/ProjectForm/ProjectForm.styles";
import { Redirect } from "react-router-dom";
import { MainTitle } from '../../pages/ProjectPage/ProjectPage.styles';
import NavBar from '../NavBar/NavBar';
// import NavigationBarRender from "../NavigationBarRender";

export default class ProfileForm extends Component {
  state = {
    bio: "",
    location: "",
    skills: "",
    redirect: false,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({ redirect: true });
    try {
      let jwt = localStorage.getItem("token");
      const fetchResponse = await fetch("/api/users/profileUpdate", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({
          bio: this.state.bio,
          location: this.state.location,
          skills: this.state.skills,
          object_id_reference: this.props.user._id,
        }),
      });

      if (!fetchResponse.ok) this.setState({ error: "We are broken" });
    } catch (err) {
      console.error("ERROR:", err);
    }
  };


  render() {
    if (this.state.redirect) {
      return <Redirect to="/projects" />;
    }
    return (
      <React.Fragment>
        <NavBar />
        <MainTitle>Fill Out Your Profile</MainTitle>
        <Wrapper autoComplete="on" onSubmit={this.handleSubmit} enctype="multipart/form-data">
				<div className="field">
					<FormLabel className="label">Location</FormLabel>
					<div className="control">
						<input className="input" name="location" value={this.state.location} onChange={this.handleChange} required/>
					</div>
				</div>
				<div className="field">
					<FormLabel className="label">Bio</FormLabel>
					<div className="control">
						<textarea className="textarea" name="bio" type="text-area" value={this.state.bio} onChange={this.handleChange} required />
					</div>
				</div>
				<div className="field">
					<FormLabel className="label">Skills</FormLabel>
					<div className="control">
						<textarea className="textarea" name="skills" type="text-area" value={this.state.skills} onChange={this.handleChange} required ></textarea>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<button type="submit" className="button is-rounded is-warning">Submit</button>
					</div>
				</div>
        <p>&nbsp;{this.state.error}</p>
				</Wrapper>
       
      </React.Fragment>
    );
  }
}