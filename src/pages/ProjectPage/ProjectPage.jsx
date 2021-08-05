
import React from 'react';
import { Component } from 'react';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import '../../css/bulma.css';
import { ProjectCard, MainTitle, ToggleBox, ToggleButton } from './ProjectPage.styles';

import NavBar from '../../components/NavBar/NavBar';



export default class ProjectPage extends React.Component {
  state = {
    
    projects:[],
    showMine:false,
    showDetail:false,
    projectDetails:[]
    
  };

 
    toggleDetailShow = (details)=> {
      let toggle = this.state.showDetail 
      toggle = this.state.showDetail  ? false : true;
      this.setState ({ showDetail: toggle , projectDetails:details})
   
     }


    
  handleDetailClose=()=>{
        this.setState({
          showDetail:false,
          // projectDetails:[]
         })
        }



  async componentDidMount() {
    try {
      let fetchItemsResponse = await fetch("/api/projects");
      let projects = await fetchItemsResponse.json();
      this.setState({ projects: projects , user:this.props.user});
    } catch (err) {
      console.error("ERROR:", err);
    }
  }

  async getProjects() {
    try {
      let fetchItemsResponse = await fetch("/api/projects");
      let projects = await fetchItemsResponse.json();
      this.setState({ projects: projects });
    } catch (err) {
      console.error("ERROR:", err);
    }
  }

  handleProjectDelete = async (id)=>{
    await this.deleteProject(id)
    this.getProjects()
    
  }

  toggleShowMine = ()=> {
   let toggle = this.state.showMine 
   toggle = this.state.showMine  ? false : true;
   this.setState ({ showMine: toggle })

  }

  async deleteProject(id) {
    let profileRes = await fetch("./api/projects/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
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
				<div class="tile is-parent">
        			<div class="tile">
							<ProjectCard>
                {this.state.showMine === false ? 
      <ToggleBox>
        <MainTitle>All Projects</MainTitle>
      <ToggleButton className="button" onClick={() => this.toggleShowMine()}>Show My Projects</ToggleButton>

      </ToggleBox> 
      : 
      <section>
      <MainTitle>Your Projects</MainTitle>
      <button className="button" onClick={() => this.toggleShowMine()}>Show All Projects</button>
      </section> }

       {this.state.showMine === false ?         
        <section>
        {this.state.projects.map((project, idx) => (
          <ProjectItem  key={idx}
     
          toggleDetailShow={this.toggleDetailShow}
          handleDetailClose={this.handleDetailClose} 
          handleProjectDelete={this.handleProjectDelete} 
          user={this.props.user}
          showMine={this.state.showMine}
          showDetail={this.state.showDetail}
          projectDetails={this.state.projectDetails}
          {...project} />
          ))}
        </section>
         : 
        <section>
          {this.state.projects.filter(project => project.object_id_reference === this.props.user._id).map((project ,idx) => (
         <ProjectItem key={idx}
    
         toggleDetailShow={this.toggleDetailShow}
         handleDetailClose={this.handleDetailClose} 
         handleProjectDelete={this.handleProjectDelete} 
         user={this.props.user}
         showMine={this.state.showMine}
         showDetail={this.state.showDetail}
         projectDetails={this.state.projectDetails}
         {...project} />
            ))}
        </section>}

							</ProjectCard>
						</div>
				</div>
			</React.Fragment>
		);
	}
}

