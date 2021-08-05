import React from 'react';
import { InnerCard } from '../../pages/ProjectPage/ProjectPage.styles'
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";


export default function ProjectItem(props) {

  return (
    <React.Fragment>
      
    {props.showMine === true? 
      <div class="tile is-parent is-vertical">
          <InnerCard className="tile is-child notification">
              <p className="title">{props.title}</p>
              <p className="subtitle">{props.tech_stack}</p>
              <p className="subtitle">{props.project_description}</p>
              <button className="button is-link is-warning is-rounded" onClick={() => props.handleProjectDelete(props._id)}>
              Delete this Project
            </button>
             <button id="b1" data-popup-id="p1" className="btn-room-name" onClick={()=> props.toggleDetailShow()}>more details</button>
            {props.showMine === true?  

      <section>
      <button onClick={() => props.handleProjectDelete(props._id)}>Delete this Project</button>
      </section>
     :

 <div></div>
    }
   
        <h1>{props.title}</h1>
        <div>{props.tech_stack}</div>
        <div>{props.project_description}</div>
        <div>last updated:{(props.updatedAt)}</div>
        <button id="b1" data-popup-id="p1" className="btn-room-name" onClick={()=> props.toggleDetailShow()}>more details</button>
  
   <ProjectDetail  
                          toggleDetailShow={props.toggleDetailShow}
                          showDetail={props.showDetail} 
                          handleDetailClose={props.handleDetailClose} 
                          projectDetails={props.projectDetails}
                          user={props.user}
                          showMine={props.showMine}
                          showDetail={props.showDetail} 
                          project_description={props.project_description} 
                          tech_stack={props.tech_stack} 
                          title={props.title} 
                          updatedAt={props.updatedAt} 

                        />
          </InnerCard>
    </React.Fragment>
}
