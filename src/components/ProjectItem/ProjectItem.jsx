import React from 'react';
import { InnerCard, ProjectButton } from '../../pages/ProjectPage/ProjectPage.styles'
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";


export default function ProjectItem(props) {

  return (
    <React.Fragment>
      <div className="tile is-parent is-vertical">
          <InnerCard className="tile is-child notification">
              <p className="title">{props.title}</p>
              <p className="subtitle">{props.tech_stack}</p>
              <p className="subtitle">{props.project_description}</p>

              {/* <ProjectButton className="button is-link is-warning is-rounded" onClick={() => props.handleProjectDelete(props._id)}>
              Delete this Project
              </ProjectButton> */}
              <ProjectButton className="button is-link is-warning is-rounded" onClick={()=> props.toggleDetailShow(props)}>More Details</ProjectButton>
            {props.showMine === true?  
            <section>
            <button onClick={() => props.handleProjectDelete(props._id)}>Delete this Project</button>
            </section>
            :
          <div></div>}
  
  <ProjectDetail  
                          toggleDetailShow={props.toggleDetailShow}
                          showDetail={props.showDetail} 
                          handleDetailClose={props.handleDetailClose} 
                          projectDetails={props.projectDetails}
                          user={props.user}
                          showMine={props.showMine}


                        />
          </InnerCard>
        </div>
    </React.Fragment>
  )
}
