import React from 'react';

function UserLogOut(props){
  return(
    <div className = 'userLogout'>
    <button onClick= {props.handelLogOut}>Logout</button>
    </div>
  );
}
export default  UserLogOut;