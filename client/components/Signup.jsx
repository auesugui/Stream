import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = props => {
  
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    password2: '',
    firstName: '',
  });

  const updateInput = (e) => {
    e.preventDefault();
    setNewUser(state => {
      return {...state, [e.target.id]: e.target.value};
    });
  };

  const history = useHistory();

  const handleSubmit = e => {
    // console.log('handleSubmit triggered');
    e.preventDefault();
    if (newUser.password === newUser.password2) {
      // console.log('Passwords match!');
      axios.post('/api', {
        firstName: newUser.firstName,
        email: newUser.email,
        password: newUser.password
      }, {
        header: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(response => {
          // console.log(response);
          history.push({
            pathname: '/dashboard',
            state: response.body
          });
        })
        .catch(error => console.log(error));
    } else {
      alert('Password confirmation not a match. Please try again.')
    }
  };  

  return(
    <div className='signup-pg'>
      <center>Signup with your email address</center><br/><br/>
      <div>
      What is your email? <br/>
        <input type='text' placeholder='Enter your email' id='email' value={newUser.email} onChange={updateInput}/>
      </div>
      <div style={{marginTop: 10}}>
      Create a password: <br/>
        <input type='password' placeholder='Create a password' id='password' value={newUser.password} onChange={updateInput}/>
      </div>
      <div style={{marginTop: 10}}>
      Confirm your password:<br/>
        <input type='password' placeholder='Confirm your password' id='password2' value={newUser.password2} onChange={updateInput}/>
      </div>
      <div style={{marginTop: 10}}>
      What should we call you?<br/>
        <input type='text' placeholder='Create a username' id='firstName' value={newUser.firstName} onChange={updateInput}/>
      </div>
      <div> <br/>
        <input type='submit' className='submit' id='register' onClick={handleSubmit}/>
      </div>
    </div>
  );
};

export default Signup;