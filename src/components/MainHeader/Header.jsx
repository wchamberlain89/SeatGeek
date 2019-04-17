import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import HeaderNav from './HeaderNav';
import '../../scss/styles.scss';
import Search from './Search';

function Header() {
  const styles = {
    width: '100%',
    height: "30vh",
    backgroundColor: "#1573e5"

  }

  return (
    <div style={styles}>
      <HeaderNav/>
      <Search/>
    </div>
  );
}

export default Header;
