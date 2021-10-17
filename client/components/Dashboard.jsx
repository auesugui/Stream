import React from 'react';
import axios from 'axios';
import Overview from './Overview';
import SubDisplay from './SubDisplay';

// dashboard will contain two major components -> an overview of statistics
// as well as a subscription component that displays indvidiual subscriptions
const Dashboard = props => {
  return (
    <div>
      <div>
        <Overview />
      </div>
      <div>
        <SubDisplay />
      </div>
    </div>
  );
};



export default Dashboard;