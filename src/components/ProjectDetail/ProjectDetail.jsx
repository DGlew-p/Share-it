import './ProjectDetail.css';

export default function ProjectDetail(props) {
	return (
		<div
			id="p1"
			className="secret-popup"
			style={{
				display: props.showDetail === false ? 'none' : 'flex',
			}}
		>
			<div className="popup-wrapper">
				<div className="popup-top">
					<h3>Details</h3>
					<div>{props.projectDetails}</div>
					<h3>Technologies</h3>
					<div>{props.tech_stack}</div>
					<h3>Description</h3>
					<div>{props.project_description}</div>
					<h3>Last Updated</h3>
					<div>{props.updatedAt}</div>
					<h3>Creator</h3>
					<div>{props.user.name}</div>
					<h3>Contact</h3>
					{/* <div>{props.user.email}</div> */}

					<div className="close-popup" onClick={() => props.toggleDetailShow()}>
						<div data-popup-id="p1" className="x-btn"></div>
					</div>
				</div>

				<p>Text</p>
			</div>
		</div>
	);
}
