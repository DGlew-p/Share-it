import React, { Component } from 'react';
import { Wrapper, FormLabel } from './ProjectForm.styles';
import { Redirect } from "react-router-dom";
import { MainTitle } from '../../pages/ProjectPage/ProjectPage.styles';
import '../../css/bulma.css';
import NavBar from '../NavBar/NavBar';

export default class ProjectForm extends Component {
	state = {
		title: '',
		tech_stack: '',
		project_description: '',
		redirect: false,
		// image:{url:"1",filename:"2"}
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async (evt) => {
		evt.preventDefault();
		this.setState({ redirect: true });

		try {
			let jwt = localStorage.getItem('token');
			const fetchResponse = await fetch('/api/projects/new', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + jwt,
				},
				body: JSON.stringify({
					image: this.state.image,
					title: this.state.title,
					tech_stack: this.state.tech_stack,
					project_description: this.state.project_description,
					object_id_reference: this.props.user._id,
				}),
			});
			await fetchResponse.json();
			console.log(fetchResponse + '   FORM FETCH');
			this.setState({
				title: '',
				tech_stack: '',
				project_description: '',
				// image:{url:"",filename:""}
			});
		} catch (err) {
			console.log('BAD FETCH', err);
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/projects" />;
		  }
		return (
			<React.Fragment>
				<NavBar />
				<MainTitle>Fill Out Your Project</MainTitle>
				<Wrapper
					autoComplete="on"
					onSubmit={this.handleSubmit}
					enctype="multipart/form-data"
				>
					<div className="field">
						<FormLabel className="label">Name of Project</FormLabel>
						<div className="control">
							<input
								className="input"
								name="title"
								value={this.state.title}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="field">
						<FormLabel className="label">Technologies Used</FormLabel>
						<div className="control">
							<input
								className="input"
								name="tech_stack"
								type="text-area"
								value={this.state.tech_stack}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="field">
						<FormLabel className="label">Description of Project</FormLabel>
						<div className="control">
							<textarea
								className="textarea"
								name="project_description"
								type="text-area"
								value={this.state.project_description}
								onChange={this.handleChange}
							></textarea>
						</div>
					</div>
					<div className="field">
						<div className="control">
							<button type="submit" className="button is-rounded is-warning">
								Submit
							</button>
						</div>
					</div>
				</Wrapper>
			</React.Fragment>
		);
	}
}
