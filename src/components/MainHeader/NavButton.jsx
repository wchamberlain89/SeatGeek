import React from 'react';
import '../../scss/styles.scss';

function NavButton(props) {
  const styles = {
    padding: '10px',
    borderRadius: '10px',
    fontWeight: '200',
    transition: '.3s',
  }

  if(props.active) {
    styles.backgroundColor = '#125cb7';
    styles.margin = "0 10px";
  }

  return (

      <a style={styles} className="navButton">
        <style jsx>
          {`
              a {
                color: white;
                font-weight: 100;
              }
          `}
        </style>

        {props.title}
      </a>
  );
}

export default NavButton;
