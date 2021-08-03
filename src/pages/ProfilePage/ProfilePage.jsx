import {Component} from 'react';
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import ProfileForm from '../../components/ProfileForm/ProfileForm';




export default class ProfilePage extends Component{
 state = {
 profileList:'',
 }


 async componentDidMount() {
  try{
   let fetchProfileResponse = await fetch('/api/users')
   let  profile = await  fetchProfileResponse.json();
   let profileStrings = profile.map(c=>c.users) 
   this.setState({profileList:profileStrings })
    } catch (err) {
       }
}





 
render(){
    return (
     <div>
     < ProfileForm />
     <UserLogOut  />
</div>



    ) }

}
