import React from 'react';

const ErrorMessage = props => {
  return (props.error) ? (
    <div className='errorMessageBox'>
      <span className='errorMessage'> {props.error} </span>
    </div>
  ) : '';
};

export default ErrorMessage;