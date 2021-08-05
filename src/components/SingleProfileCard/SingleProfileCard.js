import React from 'react';

export default function SingleProfileCard(props) {
	return (
		<div className={ `modal ${ props.showDetail === false ? 'null' : 'is-active'}`}>
		<div className="modal-background"></div>
		<div className="modal-card">
			<header className="modal-card-head">
				<p className="modal-card-title">{props.profileDetails.name}</p>
				<button className="delete" aria-label="close" onClick={() => props.handleDetailClose()}></button>
			</header>
			<section className="modal-card-body">
				<h3>Location</h3>
				<div>{props.profileDetails.location}</div>
				<h3>Bio</h3>
				<div>{props.profileDetails.bio}</div>
				<h3>Skills</h3>
				<div>{props.profileDetails.skills}</div>
				<h3>Contact</h3>
				<div>{props.profileDetails.email}</div>
	
			</section>																
		</div>		
	</div>
	);
}
