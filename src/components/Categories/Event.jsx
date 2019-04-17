import React from 'react';

function Event(props) {
  let styles = {
    width: "24%"
  }

  return (
    <div style={styles}>
      <img style={{width: "100%", borderRadius: '5px'}} src={require(`../../assets/img/${props.image}`)}/>
      <h3 style={{textOverflow: "ellipsis", fontWeight: "400", fontSize: "1.2em"}}>{props.title}</h3>
      <div>
        <span>{props.date}</span>
        <span>{props.location}</span>
      </div>
    </div>

  );
}

export default Event;
