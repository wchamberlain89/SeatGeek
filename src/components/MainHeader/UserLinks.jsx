import React from 'react';
import NavButton from './NavButton';


function UserLinks() {

  let style = {
    fontWeight: "300"
  }
  return (
    <div style={style}>
      <NavButton title="Track My Order"/>
      <NavButton title="Sign Up"/>
      <NavButton title="Log In"/>
    </div>
  );
}

export default UserLinks;
