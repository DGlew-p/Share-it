import React from 'react'
import ProjectItem from '../../components/ProjectItem/ProjectItem'





export default class ProjectPage extends React.Component {

state = {
    projects: [],
    user_id:""
  }


async componentDidMount(){
    try {
      let fetchItemsResponse = await fetch('/api/projects')
      let projects = await fetchItemsResponse.json();
      this.setState({ projects: projects, user: this.user})
    } catch (err) {
      console.error('ERROR:', err)
    }
  }

    render(){
        return(
            <div>
      
                {this.project.map((project, idx) => (
                <ProjectItem
                    key={idx}
                      {...project}
                 />
                )
                )
            }
            <h1>PROJECT PAGE</h1>
            </div>
        );
    }
}


