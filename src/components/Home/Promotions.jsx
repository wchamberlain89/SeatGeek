import React from 'react';
import Promotion from './Promotion'

function Home() {
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  }
  return(
    <div style={styles}>
      <Promotion image={"download.png"}/>
      <Promotion image={"download-1.png"}/>
    </div>
  );
}
export default Home;
