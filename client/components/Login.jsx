import React, { useState, useEffect } from 'react';
import axios from 'axios';
// maybe pass in useHistory here to enable passing of props
import { useHistory } from 'react-router-dom';
import ErrorMessage from './ErrorMessage.jsx';

const Login = (props) => {
	//create username and password hooks
	const email = useFormInput('');
	const password = useFormInput('');
	const [error, setError] = useState(null);

	const history = useHistory();
	
	//handle button click of login form
	const handleLogin = () => {
		setError(null);
		axios
			.post('/api/login', { email: email.value, password: password.value })
			.then((response) => {
				// later on add in SessionID/verification
				// console.log(response);
				console.log('Wrong password response: ', response);
				if (response.data.err) {
					setError(response.data.err);
				} else {
					console.log(response.data);
					props.history.push({
						pathname: '/dashboard',
						state: response.data.userData,
					});
				}
			})
			.catch((error) => {
				// if (error.response.status === 401) setError(error.response.data.message); else
				console.log('Caught error in axios.catch')
				setError('Something went wrong. Please try again later.');
			});
		};
		
	const handleSignup = () => {
		props.history.push('/signup');
	};

	return (
		<div className='wrap'>
			<div className='logo'>
				<img src='./assets/logo.png' />
			</div>
			<div>
				<div className='login-field'>
					<input
						type='text'
						id='email'
						{...email}
						placeholder='Email'
						autoComplete='new-password'
						required
					/>
				</div>
			</div>
			<div style={{ marginTop: 10 }}>
				<div className='login-field'>
					<input
						type='password'
						id='password'
						{...password}
						placeholder='Password'
						autoComplete='new-password'
						required
					/>
				</div>
			</div>
			<ErrorMessage error={error} setError={setError} />
			<div>
				{' '}
				<br />
				<input
					type='submit'
					className='submit'
					id='login'
					value='Login'
					onClick={handleLogin}
				></input>
				<h3 type='text' className='register'>
					{' '}
					Don&apos;t have an account?{' '}
					<button className='signup-btn' onClick={handleSignup}>
						Signup
					</button>
				</h3>
			</div>
		</div>
	);
};

const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e) => {
		// console.log(e.target.value);
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange,
	};
};


export default Login;
