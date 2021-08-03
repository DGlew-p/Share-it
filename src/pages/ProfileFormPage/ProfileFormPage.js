import { Component } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

export default class ProfilePage extends Component {
	render() {
		return (
			<div>
				<ProfileForm user={this.props.user} />
			</div>
		);
	}
}
