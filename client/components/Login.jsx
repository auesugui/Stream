import React, { useState } from 'react';
import axios from 'axios';


const Login = props => {
  //create username and password hooks
  const username = useFormInput('');
  const password = useFormInput('');



  //handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
  };


  return(
    <div>Hello
      <div>
        Username
        <input type='text' {...username} autoComplete='new-password'/>
      </div>
      <div style={{marginTop: 10}}>
        Password
        <input type='new-password' {...password}
          autoCompelte='new-password'/>
      </div>
    </div>
  );
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange
  };
};



export default Login;

