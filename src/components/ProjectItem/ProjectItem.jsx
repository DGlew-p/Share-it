import React from 'react';
import '../../css/bulma.css'


// import { Image } from "cloudinary-react";

export default function ProjectItem(props) {
  return (
    <React.Fragment>
      <article className="tile is-child box">
        <p className="title">{props.title}</p>
        <p className="subtitle">{props.tech_stack}</p>
        <p className="subtitle">{props.project_description}</p>
        <button className="button is-link  is-rounded is-outlined" onClick={() => props.handleProjectDelete(props._id)}>
        Delete this Project
      </button>
      </article>
  


     
    </React.Fragment>
  );
}
