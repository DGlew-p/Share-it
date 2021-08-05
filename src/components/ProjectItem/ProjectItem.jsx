import "./ProjectItem.css";
import { Image } from "cloudinary-react";

export default function ProjectItem(props) {

  return (
    <div>
   
        <h1>{props.title}</h1>
        <div>{props.tech_stack}</div>
        <div>{props.project_description}</div>
        <div>last updated:{(props.updatedAt)}</div>
        <button id="b1" data-popup-id="p1" className="btn-room-name" onClick={()=> props.handleRoomClick(props)}>more details</button>
  
    {props.showMine === true?  
      <section>
      <button onClick={() => props.handleProjectDelete(props._id)}>Delete this Project</button>
      </section>
     :
    <section></section>
    }
    </div>
  );
}
