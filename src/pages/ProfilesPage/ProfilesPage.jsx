import { Component } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

export default class AllProfiles extends Component {

    state = {
        profilesHistory: []
    }

    async componentDidMount(){
        try {
            let jwt = localStorage.getItem('token');
            let fetchProfileResponse = await fetch('api/users/', { headers: {'Authorization': 'Bearer ' + jwt}});
            if(!fetchProfileResponse.ok) throw new Error('Could Grab Profiles');
            let profiles = await fetchProfileResponse.json();
            this.setState({ profilesHistory: profiles});
        } catch(err){
            console.error('Error:', err)// log if error

        }   
    }
    
    render(){
        return (
            <div>
                <h1>All Profiles</h1>
                {this.state.profilesHistory.map(profile => (
                    <ProfileCard {...profile} />
                ))}
            </div>
        )
    }
}
