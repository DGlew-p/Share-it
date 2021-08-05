import "./ProjectItem.css";
// import { Image } from "cloudinary-react";

export default function ProjectItem(props) {
  return (
    <div>
   
        <h1>{props.title}</h1>
        <div>{props.tech_stack}</div>
        <div>{props.project_description}</div>
        <div>last updated:{(props.updatedAt)}</div>
  
{/* 
      <button onClick={() => props.editProject(props._id)}>
        Edit this Project
      </button> */}

      <button onClick={() => props.handleProjectDelete(props._id)}>
        Delete this Project
      </button>
    </div>
  );
}
