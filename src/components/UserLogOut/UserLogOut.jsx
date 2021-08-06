import React from 'react';
import { Logout } from '../../pages/AuthPage/AuthPage.styles'

class UserLogOut extends React.Component {

  render() {
  return (
      <React.Fragment>
        <Logout className="button" onClick={() => this.props.userLogout()}>Logout</Logout>
      </React.Fragment>
  );
  }
}

export default UserLogOut;