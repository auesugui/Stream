import React, { useState, useEffect } from 'react';

const Sub = ({ name, cost, renewal }) => {
  // WHAT TO RENDER:
  // name from props
  // cost/month
  // renewal date
  // A button to cancel (aka delete for now)

  // const handleCancel = () => {
  //axios delete request with useEffect hook
  // setError(null);
  // axios.delete('/user', { data: payload })
  //   .then(res =>
  //     //delete
  //   )
  //   .catch(error => {
  //     if (error.response.status === 404) setError(error.response.data.message);
  //     else setError('Something went wrong. Please try again later.');
  //     })
  // };
  
 

  return (
    <div className="subBox" >
      <h4>{`Name: ${name}`}</h4>
      <h4>{`Monthly Fee: $${cost}`}</h4>
      <h4>{`Start Date: ${renewal}`}</h4>
    </div>
  );
};

//Functionality for getting a renewal date. The getMonth() method returns the month of a date as a number (0-11):
//const now = new Date();
// const renewal = now.setDate(now.getDate() + 30);


export default Sub;