import React from 'react';
import { InnerCard } from '../../pages/ProjectPage/ProjectPage.styles'

// import { Image } from "cloudinary-react";

export default function ProjectItem(props) {
  return (
    <React.Fragment>
      <div class="tile is-parent is-vertical">
          <InnerCard className="tile is-child notification">
              <p className="title">{props.title}</p>
              <p className="subtitle">{props.tech_stack}</p>
              <p className="subtitle">{props.project_description}</p>
              <button className="button is-link is-warning is-rounded" onClick={() => props.handleProjectDelete(props._id)}>
              Delete this Project
            </button>
          </InnerCard>
        </div>
    </React.Fragment>
  );
}
