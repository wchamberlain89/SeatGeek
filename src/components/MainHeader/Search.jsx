import React from 'react';
function Search() {

  let style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 auto',
    color: 'white',
  }
  let search = {
    backgroundColor: 'white',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    borderRadius: '10px',
    justifyContent: 'space-between',
    padding: '0px 20px'
  }
  let input = {
    flexGrow: '1',
    width: '55%',
    height: '35px',
    border: 'none',
    fontSize: '25px'
  }
  let img = {}

  return (
    <div style={style}>
      <h1>Millions of tickets in one place</h1>
      <div style={search}>
        <img style={{width: '20px'}}  src={require("../../assets/img/magnifying.png")} alt=''/>
        <input style={input}/>
        <button style={{backgroundColor: "#1573e5", color: 'white', borderRadius: '3px', padding: '5px 20px'}}>Search</button>
      </div>
    </div>

  );
}

export default Search;
