import React from 'react';

function Location() {
  let styles = {
    display: 'flex',
    alignItems: 'center'
  }


  return(
    <div style={styles}>
      <svg style={{marginRight: "8px"}} fill="#494949" stroke="none" color="#494949" height="1em" width="1em" viewBox="0 0 24 24" class="Icon__Svg-sc-1p4cho-0 iBtpwK"><path d="M12,13 C10.343,13 9,11.657 9,10 C9,8.343 10.343,7 12,7 C13.657,7 15,8.343 15,10 C15,11.657 13.657,13 12,13 M12,4 C8.686,4 6,6.686 6,10 C6,15 12,20 12,20 C12,20 18,15.063 18,10 C18,6.686 15.314,4 12,4"></path></svg>
      <h4>Portland, OR</h4>
    </div>
  );
}

export default Location;
