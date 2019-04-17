import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import HeaderNav from './HeaderNav';
import '../../scss/styles.scss';
import Search from './Search';

function Header() {
  const styles = {
    width: '100%',
    height: '375px',
    backgroundColor: '#127be5',
    backgroundImage: 'linear-gradient(to left, #0c8fe6, #1573e5)',
    paddingTop: '10px'
  }

  const inner = {
      maxWidth: '968px',
      margin: '0 auto'
  }

  return (
    <div style={styles}>
      <div style={inner}>
        <HeaderNav/>
        <Search/>
      </div>
    </div>
  );
}

export default Header;
