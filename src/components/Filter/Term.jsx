import React from 'react';


function Term() {
  let styles = {
    display: 'flex',
    alignItems: 'center'
  }

  return(
    <div style={styles}>
      <h4>Date</h4>
      <svg style={{marginLeft: "8px"}} width="7px" height="4px" viewBox="0 0 7 4" class="sg-dropdown__arrow"><g transform="translate(-77, -9)" fill="#7A7A7A"><path d="M80.50025,13 L77.14625,9.81121873 C76.95125,9.62582447 76.95125,9.32539069 77.14625,9.13904569 C77.34225,8.95365144 77.65825,8.95365144 77.85425,9.13904569 L80.50025,11.6556539 L83.14625,9.13904569 C83.34225,8.95365144 83.65825,8.95365144 83.85425,9.13904569 C84.04925,9.32539069 84.04925,9.62582447 83.85425,9.81121873 L80.50025,13 Z"></path></g></svg>
    </div>
  );
}

export default Term;
