import React, { Component } from 'react';
import { Wrapper, FormLabel } from './ProjectForm.styles';
// import NavigationBarRender from '../NavigationBarRender';
import '../../css/bulma.css';
import NavBar from '../NavBar/NavBar';
export default class ProjectForm extends Component {
	state = {
		title: '',
		tech_stack: '',
		project_description: '',
		// image:{url:"1",filename:"2"}
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async (evt) => {
		evt.preventDefault();

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
		return (
			<React.Fragment>
				<NavBar />
				<Wrapper>
				<div className="field">
					<FormLabel className="label">Name of Project</FormLabel>
					<div className="control">
						<input className="input" name="title" value={this.state.title} onChange={this.handleChange} />
					</div>
				</div>
				<div className="field">
					<FormLabel className="label">Technologies Used</FormLabel>
					<div className="control">
						<input className="input" name="tech_stack" type="text-area" value={this.state.tech_stack} onChange={this.handleChange} />
					</div>
				</div>
				<div className="field">
					<FormLabel className="label">Description of Project</FormLabel>
					<div className="control">
						<textarea className="textarea" name="project_description" type="text-area" value={this.state.project_description} onChange={this.handleChange}></textarea>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<button className="button is-rounded is-warning">Submit</button>
					</div>
				</div>
				</Wrapper>
			</React.Fragment>
		);
	}
}


{/* <div className="field"
						autoComplete="on"
						onSubmit={this.handleSubmit}
						enctype="multipart/form-data"
					>
						<div className="label"></div>
						<Wrapper className="field">
							<label>Title:</label>
							<input
								name="title"
								value={this.state.title}
								onChange={this.handleChange}
							/>

							<label>Technologies:</label>
							<input
								name="tech_stack"
								type="text-area"
								value={this.state.tech_stack}
								onChange={this.handleChange}
							/>

							<label>Project Description:</label>
							<input
								name="project_description"
								type="text-area"
								value={this.state.project_description}
								onChange={this.handleChange}
							/>
							<button type="submit">Create</button>
						</Wrapper>
					</div> */}