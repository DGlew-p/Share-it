import { Component } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
// import NavigationBarRender from "../../components/NavigationBarRender";
// import SingleProfileCard from '../../components/SingleProfileCard/SingleProfileCard'

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
                {/* <NavigationBarRender/> */}
                <h1>All Profiles</h1>
            
                {this.state.profilesHistory.map((profile) => (
                   
                    <ProfileCard key={profile._id} {...profile} handleProfileDelete={this.handleProfileDelete} showProfile={this.showProfile}/>
                    // <button onClick={() => this.showProfile(profile._id)}>Button</button>
                ))}
                {/* <SingleProfileCard showProfile={this.showProfile} showList={this.showList} showCard={this.showCard} /> */}
                
            </div>
        );
      }
}