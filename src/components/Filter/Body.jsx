import React from 'react';
import Location from './Location';
import Spacer from './Spacer';
import Term from './Term';



function FilterContainer() {
  let styling = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(100,100,100,.25)',
    padding: '15px 0'
  }

  return (
    <div style={styling}>
      <Location/>
      <Spacer/>
      <Term/>
    </div>
  );


}

export default FilterContainer;
