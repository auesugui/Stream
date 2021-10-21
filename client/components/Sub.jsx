import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from './Popup';

const Sub = ({ id, name, cost, renewalDate, state, setState }) => {
	// WHAT TO RENDER:
	// name from props
	// cost/month
	// renewal date
	// A button to cancel (aka delete for now)

	const [togglePopup, setTogglePopup] = useState(false);
	const [updatedSubInfo, setUpdatedSubInfo] = useState({
		name: name,
		cost: cost,
		renewalDate: renewalDate,
	});

	const updateInput = (e) => {
		e.preventDefault();
		setUpdatedSubInfo((state) => {
			return { ...state, [e.target.id]: e.target.value };
		});
	};

	const handleEdit = () => {
		// axios delete request with useEffect hook
		// setError(null);
		axios
			.put(`/api/subscriptions/${state._id}/${id}`, updatedSubInfo)
			.then((res) => {
				console.log('Updated ', name);
				setState({ ...state, needsRefresh: true });
			})
			.catch((error) => {
				console.log(error);
				// if (error.response.status === 404) setError(error.response.data.message);
				// else setError('Something went wrong. Please try again later.');
			});
	};

	const handleDelete = () => {
		// axios delete request with useEffect hook
		// setError(null);
		axios
			.delete(`/api/subscriptions/${state._id}/${id}`)
			.then((res) => {
				console.log('Deleted ', name);
				setState({ ...state, needsRefresh: true });
			})
			.catch((error) => {
				console.log(error);
				// if (error.response.status === 404) setError(error.response.data.message);
				// else setError('Something went wrong. Please try again later.');
			});
	};

	// console.log('subID: ', id, 'userID: ', userId);
	const logo = [];
	if (updatedSubInfo.name) {
		const domainName = updatedSubInfo.name.toLowerCase().split(' ').join('');
		const logoUrl =
			'https://logo.clearbit.com/' + domainName + '.com' + '?size=65';
		logo.push(<img className='subLogo' src={logoUrl} />);
	}

	return (
		<div className='subBox'>
			<div className='subButtonContainer'>
				<button
					className='editSubButton'
					id='editSubButton'
					onClick={setTogglePopup}
				>
					mode_edit
				</button>
				<button
					className='deleteSubButton'
					id='deleteSubButton'
					onClick={handleDelete}
				>
					delete
				</button>
			</div>
			<div>{logo}</div>
			<h4>{`Name: ${name}`}</h4>
			<h4>{`Monthly Fee: $${cost}`}</h4>
			<h4>{`Renewal Date: ${new Date(renewalDate).toLocaleDateString()}`}</h4>
			<main>
				<Popup trigger={togglePopup} setTrigger={setTogglePopup}>
					<h3>
						<div>
							<div>
								Edit Subscription Information
								<br />
								<br />
								<input
									type='text'
									id='name'
									value={updatedSubInfo.name}
									onChange={updateInput}
								/>
							</div>
							<div style={{ marginTop: 10 }}>
								<span>
									<input
										className='sub-cost'
										id='cost'
										type='number'
										value={updatedSubInfo.cost}
										onChange={updateInput}
									/>{' '}
									/month
								</span>
							</div>
							<div style={{ marginTop: 10 }}>
								<input
									type='date'
									id='renewalDate'
									value={renewalDate}
									onChange={updatedSubInfo.updateInput}
								/>
							</div>
							<div style={{ marginTop: 10 }}>
								<input
									type='submit'
									className='submit'
									id='submit-sub'
									value='Save'
									onClick={() => {
										setTogglePopup(false);
										handleEdit();
									}}
								></input>
							</div>
						</div>
					</h3>
				</Popup>
			</main>
		</div>
	);
};

//Functionality for getting a renewal date. The getMonth() method returns the month of a date as a number (0-11):
//const now = new Date();
// const renewal = now.setDate(now.getDate() + 30);

export default Sub;
