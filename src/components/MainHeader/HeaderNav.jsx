import React from 'react';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';

function HeaderNav() {
  let style = {
    height: '20%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
  return (
    <div style={style}>
      <NavLinks/>
      <UserLinks/>
    </div>
  );
}
export default HeaderNav;
