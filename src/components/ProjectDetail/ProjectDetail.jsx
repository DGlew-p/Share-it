// import './ProjectDetail.css';
import React from 'react';
import '../../css/bulma.css';

export default function ProjectDetail(props) {
	return (
		<div className={ `modal ${ props.showDetail === false ? 'null' : 'is-active'}`}>
			<div className="modal-background"></div>
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">{props.title}</p>
					<button className="delete" aria-label="close" onClick={() => props.toggleDetailShow()}></button>
				</header>
				<section className="modal-card-body">
					<h3>Technologies</h3>
					<div>{props.tech_stack}</div>
					<h3>Description</h3>
					<div>{props.project_description}</div>
					<h3>Last Updated</h3>
					<div>{props.updatedAt}</div>
					<h3>Creator</h3>
					<div>{props.user.name}</div>
					<h3>Contact</h3>
					<div>{props.user.email}</div>
				</section>																
			</div>		
		</div>
	);
}
