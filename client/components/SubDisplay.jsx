import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubCreator from './SubCreator';
import Sub from './Sub';

const SubDisplay = props => {

  // useEffect(() => {
  //   console.log('props.state: ', props.state);
  // }, []);
  
  const dateFixer = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };

  const subs = props.state.subs.map(sub => {
    // const newSub = {...sub}
    // eslint-disable-next-line react/jsx-key
    return (<Sub id={sub._id} name={sub.name} cost={sub.cost} renewalDate={dateFixer(sub.renewalDate)} userId={props.state._id} setState={props.setState}/>);
  });

  // console.log('SubDisplay Props: ', props);
  // console.log('props.state._id: ', props.state._id);

  return (
    <div className="outerBox" >
      <h2>Your Subscriptions</h2>
      <br />
      <hr className="solid" />
      <br />
      <div> 
        <SubCreator state={props.state} setState={props.setState} />
      </div>
      <div className="displayBox">
        {subs}
      </div>
    </div>
  );
};

export default SubDisplay;