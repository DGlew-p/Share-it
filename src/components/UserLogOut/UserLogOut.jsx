import React from 'react';

class UserLogOut extends React.Component {

  render() {
  return (
      <>
        <button className="button" onClick={() => this.props.userLogout()}>Logout</button>
      </>
  );
  }
}

export default UserLogOut;