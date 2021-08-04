import { Component } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import NavigationBarRender from "../../components/NavigationBarRender";

export default class AllProfiles extends Component {

    state = {
        profilesHistory: []
    }


    async componentDidMount(){
        try {
            let jwt = localStorage.getItem('token');
            let fetchProfileResponse = await fetch('api/users/', { headers: {'Authorization': 'Bearer ' + jwt}});
            if(!fetchProfileResponse.ok) return 'Could NOT Grab Profiles';
            let profiles = await fetchProfileResponse.json();
            this.setState({ profilesHistory: profiles});
        } catch(err){
            console.error('Error:', err)// log if error

        }   
    }


    async getProfiles() {
        try {
            let jwt = localStorage.getItem('token');
            let fetchProfileResponse = await fetch('api/users/', { headers: {'Authorization': 'Bearer ' + jwt}});
            if(!fetchProfileResponse.ok) return 'Could NOT Grab Profiles';
            let profiles = await fetchProfileResponse.json();
            this.setState({ profilesHistory: profiles});
        } catch(err){
            console.error('Error:', err)// log if error

        }   
    }
      

    handleProfileDelete = async (id)=>{
        await this.deleteProfile(id)
        this.getProfiles()
        
      }

    async deleteProfile(id) {
        let profileRes = await fetch('./api/users/',{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id})
        })
        let profile = await profileRes.json()
        return profile
      }
    
    render(){
        return (
            <div>
                <NavigationBarRender/>
                <h1>All Profiles</h1>
                {this.state.profilesHistory.map(profile => (
                    <ProfileCard getAll = {this.getAll} handleProfileDelete={this.handleProfileDelete}{...profile} />
                ))}
            </div>
        )
    }
}
