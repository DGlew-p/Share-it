import "./ProjectItem.css";

export default function ProjectItem(props) {
  return (
    <div>
        <a href='project / project._id'>
      <h1>{props.title}</h1>

      <image class="image">
        <img src={props.image_upload} alt=""></img>
     </image> 
      <div>{props.tech_stack}</div>
      <div>{props.project_description}</div>
      {/* <div>{props.timestamps.toLocaleDateString()}</div> */}
      </a>

      <div>
          <button>
            Edit this Project
          </button>

          <button>
            Delete this Project
          </button>

       

          </div>
 
    </div>

  );
}


<p class="subtitle read"><a href="/entries/<%= entry._id %>">Click to Read</a></p>