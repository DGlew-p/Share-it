import React from 'react';

export default function ProfileCard(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<h2>{props.location}</h2>
			<p>{props.bio}</p>
		{/* <button onClick={()=> props.editProfile(props._id)}>
            Edit this Profile
          </button> */}
		<div>
          <button onClick={()=> props.handleProfileDelete(props._id)}>
		  Delete this Profile
		 
          </button>
		  </div>
		</div>
	);
}
