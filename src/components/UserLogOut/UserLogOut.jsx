import React from 'react';

class UserLogOut extends React.Component {

  render() {
  return (
      <>
        <h3 onClick={this.props.userLogout}>Logout</h3>
      </>
  );
  }
}

export default UserLogOut;