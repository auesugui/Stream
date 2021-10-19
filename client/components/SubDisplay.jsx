import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubCreator from './SubCreator';
import Sub from './Sub';

const SubDisplay = props => {

  useEffect(() => {
    console.log('props.state: ', props.state);
  }, []);


  const subs = props.state.subs.map(sub => {
    // const newSub = {...sub}
    // eslint-disable-next-line react/jsx-key
    return (<Sub id={sub.id} name={sub.name} cost={sub.cost} renewal={sub.renewal}/>);
  });


  return (
    <div className="outerBox" >
      <h2>Your Subscriptions</h2>
      <br />
      <hr className="solid" />
      <br />
      <div> 
        <SubCreator />
      </div>
      <div className="displayBox">
        {subs}
      </div>
    </div>
  );
};

export default SubDisplay;