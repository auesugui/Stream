import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubCreator from './SubCreator';
import Sub from './Sub';

const SubDisplay = props => {

  // axios get request on component mount -> for all subs that the user has [{sub1}, {sub2}...]
  // then take data received and pass as props to individual subs
  // using params to store the specific user to find
  useEffect(() => {
    axios.get('/users')
  }, []);

  return (
    <div>
      <h1>SubDisplay</h1>
      <div>
        <SubCreator />
      </div>
      <div>
        {/* going to need functionality in making each sub, best way is to set attributes from data fetch */}
        <Sub/>
      </div>
    </div>
  );
};


export default SubDisplay;