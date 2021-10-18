import React, { createContext, useState, useContext } from 'react';
import Popup from './Popup';


const SubCreator = props => {
  const [togglePopup, setTogglePopup] = useState(false);
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
                  <input type='text' placeholder='Subscription Name' />
                </div>
                <div style={{marginTop: 10}}>
                  <span><input className='sub-cost' type='number' placeholder='Subscription Cost' /> /month</span>
                </div>
                <div style={{marginTop: 10}}>
                  <input type='date' placeholder='Due Date' />
                </div>
                <div style={{marginTop: 10}}>
                  <input type='submit' className='submit' id='login' value='Add' ></input>
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