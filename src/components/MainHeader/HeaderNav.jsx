import React from 'react';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';

function HeaderNav() {
  let style = {
    height: '20%',
      maxWidth: '1400px',
      margin: '0 auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
  return (
    <div style={style}>
      <NavLinks/>
      <UserLinks/>
    </div>
  );
}
export default HeaderNav;
