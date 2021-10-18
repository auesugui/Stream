import React from 'react';
import axios from 'axios';

const Overview = (props) => {

  const totalSubStat = totalSub(props.state.subs);
  const totalCostStat = totalCost(props.state.subs);


  return (
    <>
      <div>
        <h2>Welcome back {props.state.firstName} {props.state.lastName}</h2> <hr className='solid'/>
        <h3>Your Monthly Overview</h3> 
      </div>
      <div className="innerbox">
        <label><strong>Total Subscriptions: </strong></label>
        {totalSubStat}
      </div>
      <div className="innerbox">
        <label><strong>Total Cost Per Month: </strong></label>
        {totalCostStat}
      </div>
    </>
  );
};

// make a function that calculates total number of subscriptions
const totalSub = (subs) => {
  const subCount = subs.length;
  return subCount;
};

// make a function that calculates total amount owed per month
const totalCost = (subs) => {
  // initialize var to hold totalCount
  let total = 0;
  // iterate through sub array and add cost
  for (let i = 0; i < subs.length; i++) {
    // turn cost value string into a number
    const cost = Number(subs[i].cost);
    total += cost;
  }
  // rounds to two decimal places for display
  total = Math.round(total * 100) / 100;
  return (`$${total}`);
};

// Number() or +

// STRETCH: make a function that displays closest upcoming charge

export default Overview;