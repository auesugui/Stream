import React, { useState, useEffect } from 'react';

const Sub = props => {
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
    <div>
      <div className='subName'>Subscription Name</div>
      <div className='monthlyFee'>Monthly Fee</div>
      <div className='subRenewal'>Renewal Date</div>
      {/* <button className="button" onClick={handleCancel}>Cancel</button> */}
    </div>
  );
};


export default Sub;