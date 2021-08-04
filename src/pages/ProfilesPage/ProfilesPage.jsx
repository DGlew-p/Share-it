import { Component } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import SingleProfileCard from '../../components/SingleProfileCard/SingleProfileCard'

export default class AllProfiles extends Component {

    state = {
        profilesHistory: [],
        profileSingle: {},
        list: true,
        card: false,

    }

    async componentDidMount(){
        try {
            let fetchProfileResponse = await fetch('api/users/');
            if(!fetchProfileResponse.ok) throw new Error('Could Not Grab Profiles');
            let profiles = await fetchProfileResponse.json();
            this.setState({ profilesHistory: profiles});
        } catch(err){
            console.error('Error:', err)// log if error

        }   
    }

    showProfile = (id) => {
		fetch(`api/users/${id}`)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ profileSingle: responseJson.data});
			});
	};

    showList = () => {
        this.setState({ card: false, list: true })
    }

    showCard = () => {
        this.setState({ card: true, list: false})
    }
    
    render(){
        return (
            <div>
                {this.state.profilesHistory.map((profile) => (
                   
                    <ProfileCard key={profile._id} {...profile} showProfile={this.showProfile}/>
                    // <button onClick={() => this.showProfile(profile._id)}>Button</button>
                ))}
                {/* <SingleProfileCard showProfile={this.showProfile} showList={this.showList} showCard={this.showCard} /> */}
                
            </div>
        );
      }
}