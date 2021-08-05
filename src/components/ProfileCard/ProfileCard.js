import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from '../../pages/ProfilesPage/ProfilesPage.styles';
export default function ProfileCard(props, showProfile) {
	return (
		<React.Fragment>
			<Card>
				<h1>{props.name}</h1>
				<h2>{props.location}</h2>
				<p>{props.bio}</p>
				<div>
					<Button
						className="button is-link is-small is-warning is-rounded"
						onClick={() => props.handleProfileDelete(props._id)}
					>
						Delete this Profile
					</Button>
				</div>

				<Link to={`/single-profile/${props}`}>
					<button
						className="button is-link is-small is-warning is-rounded"
						showProfile={() => showProfile({ ...props })}
					>
						Push Me
					</button>
				</Link>
			</Card>
		</React.Fragment>
	);
}
