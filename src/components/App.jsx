import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
// import { Switch, Route } from 'react-router-dom';
// import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <TicketList/>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
