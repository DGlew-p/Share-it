import { Component } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

export default class ProfilePage extends Component {
	state = {
		profileList: [],
	};

	async componentDidMount() {
		try {
			let fetchProfileResponse = await fetch('/api/users');
			let profile = await fetchProfileResponse.json();
			let profileStrings = profile.map((c) => c.users);
			this.setState({ profileList: profileStrings });
		} catch (err) {}
	}

	render() {
		return (
			<div>
				<ProfileForm user={this.props.user} />
			</div>
		);
	}
}
