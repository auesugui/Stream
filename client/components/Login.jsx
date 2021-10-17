import React, { useState } from 'react';
import axios from 'axios';




const Login = props => {
  //create username and password hooks
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);



  //handle button click of login form
  const handleLogin = () => {
    setError(null);
    axios.post('/login', { email: email.value, password: password.value })
      .then(res =>
        // later on add in SessionID/verification
        props.history.push('/dashboard'))
      .catch(error => {
        if (error.response.status === 401) setError(error.response.data.message);
        else setError('Something went wrong. Please try again later.');
      });
  };

  // handles when button is clicked for signup, redirects to signup page

  const handleSignup = () => {
    props.history.push('/signup');
  };

  return(
    <div className='maindiv'>
      <div className='logintext'>Login</div><br/><br/>
      <div>
        <div className='text'>
        Email:
        </div>
        <input type='text' {...email} autoComplete='new-password'/>
      </div>
      <div style={{marginTop: 10}}>
        <div className='text'>
          Password:  
        </div>
        <input type='new-password' {...password}
          autoComplete='new-password'/>
      </div>
      <div> <br/>
        <input type="button" value="Login" onClick={handleLogin}/>
        <input type="button" value="Signup" onClick={handleSignup}/>
      </div>
    </div>
  );
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange
  };
};



export default Login;

