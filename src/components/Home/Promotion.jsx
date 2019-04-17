import React from 'react';
import background from '../../assets/img/download.png';
function Promotion(props){
  const styles = {
    borderRadius: "5px",
  }

  return(
    <div style={styles}>
      <img style={styles} src={require(`../../assets/img/${props.image}`)}/>
    </div>
  )
}

export default Promotion;
