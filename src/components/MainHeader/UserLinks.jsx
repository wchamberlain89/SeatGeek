import React from 'react';
import NavButton from './NavButton';


function UserLinks() {

  let style = {
    fontWeight: "300",
    display: "flex",
    justifyContent: "space-between"
  }


  return (
    <div style={style}>
      <NavButton title="Track My Order"/>
      <NavButton active="true" title="Sign Up"/>
      <NavButton title="Log In"/>
    </div>
  );
}

export default UserLinks;
