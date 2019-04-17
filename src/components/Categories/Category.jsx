import React from 'react';
import Event from './Event';
function Category(props) {

  let styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

  }

  let headerStyles = {
    fontWeight: '800',
    fontSize: '1.3em',
    marginTop: '40px',
    marginBottom: '20px'
  }

  return (
    <div>
      <h2 style={headerStyles}>{props.title}</h2>
      <div style={styles}>
        <Event image="1.jpg" title="Why Don't We" date="April 17th" location="Arlene Schnitzer Concert Hall"/>
        <Event image="2.jpg" title="Buddy Guy with Curtis Salgado" date="April 17th" location="Roseland Theater"/>
        <Event image="3.jpg" title="lovelytheband with Flora Cash" date="April 17th" location="Wonder Ballroom"/>
        <Event image="4.jpg" title="The Expendables" date="April 17th" location="Aladdin Theater"/>
      </div>
    </div>
  );
}

export default Category;
