import React from 'react';
import TicketList from './TicketList';
import Header from './MainHeader/Header';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import FilterContainer from './Filter/Body';
import HomeBody from './Home/HomeBody';

function App(){


  return (
    <div>
      <Header/>
      <FilterContainer/>
      <HomeBody/>
    </div>
  );
}

export default App;
