import React from 'react';
import axios from 'axios';
import Overview from './Overview';
import SubDisplay from './SubDisplay';

// dashboard will contain two major components -> an overview of statistics
// as well as a subscription component that displays indvidiual subscriptions
const Dashboard = props => {
  return (
    <div className='container'>
      <div className='outerBox'>
        <h1 id='header'>SUBr</h1>
        <Overview />
      </div>
      <div>
        <SubDisplay />
      </div>
    </div>
  );
};



export default Dashboard;