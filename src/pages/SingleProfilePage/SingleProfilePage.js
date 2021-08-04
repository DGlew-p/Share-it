import { Component } from 'react';
import SingleProfileCard from '../../components/SingleProfileCard/SingleProfileCard';

// const singleProfile = () => {
// 	const { id } = useParams();
// 	const [profile, setProfile] = React.useState(null);

// 	React.useEffect(function () {});

// 	return (
// 		<div>
// 			<h1></h1>
// 		</div>
// 	);
// };

// export default singleProfile;
export default class SingleProfile extends Component {
	// const { id } = props.match.params;
	// console.log('This is the id on profilecard page', id);

	state = {
		profileSingle: {},
	};

	// async componentDidMount(id) {
	// 	try {
	// 		let fetchSingleProfile = await fetch(`api/users/${id}`);
	// 		let profile = await fetchSingleProfile.json();
	// 		this.setState({ profilesSingle: profile });
	// 	} catch (err) {
	// 		console.error('Error:', err);
	// 	}
	// }

	render() {
		return (
			<div>
				<SingleProfileCard profileSingle={this.state.profileSingle} />
			</div>
		);
	}
}
