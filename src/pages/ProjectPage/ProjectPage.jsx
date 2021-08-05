import React from 'react';
import { Component } from 'react';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import '../../css/bulma.css';
import { ProjectCard, MainTitle, } from './ProjectPage.styles';

import NavBar from '../../components/NavBar/NavBar';

export default class ProjectPage extends Component {
	state = {
		projects: [],
	};

	async componentDidMount() {
		try {
			let fetchItemsResponse = await fetch('/api/projects');	
			let projects = await fetchItemsResponse.json();
			this.setState({ projects: projects });
		} catch (err) {
			console.error('ERROR:', err);
		}
	}

	async getProjects() {
		try {
			let fetchItemsResponse = await fetch('/api/projects');
			let projects = await fetchItemsResponse.json();
			this.setState({ projects: projects });
		} catch (err) {
			console.error('ERROR:', err);
		}
	}

	handleProjectDelete = async (id) => {
		await this.deleteProject(id);
		this.getProjects();
	};

	async deleteProject(id) {
		let profileRes = await fetch('./api/projects/', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id }),
		});
		let profile = await profileRes.json();
		return profile;
	}

	render() {
		return (
			<React.Fragment>
				<NavBar userLogout={this.props.userLogout} />
				<MainTitle>All Projects</MainTitle>
				<div class="tile is-parent">
        			<div class="tile">
							<ProjectCard>
								{this.state.projects.map((project) => (
									<ProjectItem
										handleProjectDelete={this.handleProjectDelete}
										{...project}
									/>
								))}
							</ProjectCard>
						</div>
				</div>
			</React.Fragment>
		);
	}
}
