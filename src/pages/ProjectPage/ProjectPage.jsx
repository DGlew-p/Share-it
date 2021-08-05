import React from "react";
import { Component } from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import NavigationBarRender from "../../components/NavigationBarRender";
// import Button from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardContent';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

// const useStyles = withStyles(theme => ({

//     heroContent: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6),
//       },
//       heroButtons: {
//         marginTop: theme.spacing(4),
//       },
//       cardGrid: {
//         paddingTop: theme.spacing(8),
//         paddingBottom: theme.spacing(8),
//       },
//       card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//       },
//       cardMedia: {
//         paddingTop: '56.25%', // 16:9
//       },
//       cardContent: {
//         flexGrow: 1,
//       },
//       footer: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(6),
//       },
// }));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class ProjectPage extends React.Component {
  state = {
    
    projects:[],
    showMine:false,
    showDetail:false,
    projectDetail:[]
    
  };

  // handleRoomClick = () => {
  //   this.setState({
  //     showDetail:false,
  //   })
  //   }

    toggleDetailShow = (details)=> {
      let toggle = this.state.showDetail 
      toggle = this.state.showDetail  ? false : true;
      this.setState ({ showDetail: toggle  })
   
     }


    
  handleDetailClose=()=>{
        this.setState({
          showDetail:false,
          projectDetails:[]
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
      <div>
        <NavigationBarRender />


      {this.state.showMine === false ? 
      <section>
        <h1>All Projects</h1>
      <button onClick={() => this.toggleShowMine()}>Show my Projects</button>

      </section> 
      : 
      <section>
      <h1>Your Projects</h1>
      <button onClick={() => this.toggleShowMine()}>Show all Projects</button>
      </section> }

       {this.state.showMine === false ?         
        <section>
        {this.state.projects.map((project , idx) => (
          <ProjectItem  key={idx}
                        toggleDetailShow={this.toggleDetailShow}
                        handleDetailClose={this.handleDetailClose} 
                        handleProjectDelete={this.handleProjectDelete} 
                        user={this.props.user}
                        showMine={this.state.showMine}
                        showDetail={this.state.showDetail}
                        // projectDetails={this.state.projectDetails}
                        {...project} />
          ))}
        </section>
         : 
        <section>
          {this.state.projects.filter(project => project.object_id_reference === this.props.user._id).map((project ,idx) => (
          <ProjectItem key={idx}
          // handleRoomClick={this.handleRoomClick} 
                        toggleDetailShow={this.toggleDetailShow}
                        handleDetailClose={this.handleDetailClose} 
                        handleProjectDelete={this.handleProjectDelete} 
                        user={this.props.user}
                        showMine={this.state.showMine}
                        showDetail={this.state.showDetail}
                        // projectDetails={this.state.projectDetails}
                        {...project} />
            ))}
        </section>}

   
      </div>
    );
  }
}

