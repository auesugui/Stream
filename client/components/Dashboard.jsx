import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Overview from './Overview';
import SubDisplay from './SubDisplay';
import { useHistory } from 'react-router-dom';

// dashboard will contain two major components -> an overview of statistics
// as well as a subscription component that displays individual subscriptions

const Dashboard = props => {
  // think it will allow us access to location info
  // const location = useLocation();
  // make an axios get request for user specific information
  // will receive: userID, firstName, lastName, email, subs as an [{sub1}, {sub2}]
  // OVERVIEW -> subs, firstName, lastName
  // SubDisplay -> userID (for delete/update), subs 
  const [state, setState] = useState({...props.location.state});

  const history = useHistory();
  // const isMounted = useRef(false);

  useEffect(() => {
    axios.get(`/api/${state._id}`)
      .then(response => {
        // console.log('GET user response: ', response);
        setState(response.data);
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  });

  // BELOW: trying to get state/page to update ONLY for new data

  // const getLatestSubs = () => {
  //   console.log('getLatestSubs triggered');
  //   axios.get(`/api/${state._id}`)
  //     .then(response => {
  //       console.log('GET user response: ', response);
  //       setState(response.data);
  //     })
  //     .catch(err => {
  //       console.log('ERROR: ', err);
  //     });
  // };

  // useEffect(() => {
  //   console.log('useEffect ran');
  //   if (state.needsRefresh) {
  //     getLatestSubs();
  //     state.needsRefresh = false;
  //   }
  // });
  

  // setState({...state, handleAddSub: handleAddSub});

  return (
    <div className='container'>
      <h1 id='header'>TEMP</h1>
      <div className='outerBox'>
        <button className='logout-btn'>Logout</button>
        <Overview state={state}/>
      </div>
      <br/>
      <div>
        <SubDisplay state={state} setState={setState}/>
      </div>
    </div>
  );
};



export default Dashboard;




// const allMarkets = [];
// for (let i = 0; i < props.marketList.length; i++) {
//   console.log('hiya');
//   allMarkets.push(
//     <Market
//       lastMarketId = {props.marketList[i].MarketID}
//       // lastMarketId = {props.lastMarketId} -> old way 
//       totalCards = {props.totalCards} // -> for '% of total'
//       totalMarkets = {props.totalMarkets}
//       // accessing marketList at index i and getting the value of the key 'Location'
//       newLocation = {props.marketList[i].Location}
//       marketList = {props.marketList}
//       // accessing marketList at index i and getting value of 'Cards'
//       Cards = {props.marketList[i].Cards}
//       // give it addCard functionality
//       addCard = {props.addCard}
//       deleteCard = {props.deleteCard}
//     />
//   );
// }
// return(
//   <div className="displayBox">
//     <h4>Markets</h4>
//     {allMarkets}
//   </div>
// );
// };