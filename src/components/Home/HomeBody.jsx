import React from 'react';
import Promotions from './Promotions';
import Category from '../Categories/Category';

function HomeBody() {
  const styles = {
    width: "968px",
    margin: "0 auto",
    paddingTop: "45px"
  }
  return (
    <div style={styles}>
      <Promotions/>
      <Category title="Popular Tonight"/>
    </div>
  )
}

export default HomeBody;
