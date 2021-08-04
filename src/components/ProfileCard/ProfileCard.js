import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProfileCard(props, showProfile) {
	return (
		<div>
			<h1>{props.name}</h1>
			<h2>{props.location}</h2>
			<p>{props.bio}</p>

			<Link to={`/single-profile/${props}`}>
				<button showProfile={() => showProfile({ ...props })}>Push Me</button>
			</Link>
		</div>
	);
}
