import "./ProjectItem.css";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";

export default function ProjectItem(props) {

  return (
    <div>
   
        <h1>{props.title}</h1>
        <div>{props.tech_stack}</div>
        <div>{props.project_description}</div>
        <div>last updated:{(props.updatedAt)}</div>
        <button id="b1" data-popup-id="p1" className="btn-room-name" onClick={()=> props.toggleDetailShow()}>more details</button>
  
    {props.showMine === true?  
      <section>
      <button onClick={() => props.handleProjectDelete(props._id)}>Delete this Project</button>
      </section>
     :
    <section></section>
    }
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

    </div>
  );
}
