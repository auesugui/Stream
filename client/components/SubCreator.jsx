import React, { createContext, useState, useContext } from 'react';
import Popup from './Popup';
import axios from 'axios';

const SubCreator = props => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [newSubInfo, setNewSubInfo] = useState({
    name: '',
    cost: 0,
    renewalDate: Date.now().toLocaleString()
  });

  const updateInput = (e) => {
    e.preventDefault();
    setNewSubInfo(state => {
      return {...state, [e.target.id]: e.target.value};
    });
  };
  
  const handleAddSub = () => {
    axios.post(`/api/subscriptions/${props.state._id}`, newSubInfo)
      .then(res => {
        // console.log('POST user response: ', res);
        props.setState({...props.state, needsRefresh: true});
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };
  
  // console.log('SubCreator Props: ', props);
  
  return (
    <div>
      <h3>Create New Subscription
        <input style={{marginTop: 10}} type='button' className='addSub' id='addSub' value='Add Sub' onClick={setTogglePopup}/>
        <main>
          <Popup trigger={togglePopup} setTrigger={setTogglePopup}>
            <h3>
              <div>
                <div>
          Enter Subscription Information<br/><br/>
                  <input type='text' id='name' placeholder='Subscription Name' onChange={updateInput} />
                </div>
                <div style={{marginTop: 10}}>
                  <span><input className='sub-cost' id='cost' type='number' placeholder='Subscription Cost' onChange={updateInput} /> /month</span>
                </div>
                <div style={{marginTop: 10}}>
                  <input type='date' id='renewalDate' placeholder='Renewal Date' onChange={updateInput} />
                </div>
                <div style={{marginTop: 10}}>
                  <input type='submit' className='submit' id='submit-sub' value='Add' onClick={() => {setTogglePopup(false); handleAddSub();}}></input>
                </div>
              </div>
            </h3>
          </Popup>
        </main>
      </h3>
    </div>
  );
};

export default SubCreator;


//name
//cost per/month
//renewal date