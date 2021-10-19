import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Overview from './Overview';
import SubDisplay from './SubDisplay';
import { useLocation } from 'react-router-dom';

// dashboard will contain two major components -> an overview of statistics
// as well as a subscription component that displays indvidiual subscriptions

const Dashboard = props => {
  // think it will allow us access to location info
  const location = useLocation();
  // make an axios get request for user specific information
  // will receive: userID, firstName, lastName, email, subs as an [{sub1}, {sub2}]
  // OVERVIEW -> subs, firstName, lastName
  // SubDisplay -> userID (for delete/update), subs 

  // Set the state
  // const [state, setState] = useState({});

  // useEffect(() => {
  //   const endpoint = '/user/' + 'location.state.userID'
  //   axios.get(endpoint)
  //     .then(res => {
  //      console.log('GET user response: ', res);
  //      setState(res.data);
  //     })
  //     .catch(err => {
  //       console.log('ERROR: ', err);
  //     });
  // }, [location]);

  // test/dummy data case
  const [state, setState] = useState({
    firstName: 'Michael',
    lastName: 'O\'Halloran',
    email: 'sohee@gmail.com',
    subs: [ // subs -> subs
      {
        id: '1',
        name: 'Amazon',
        cost: '15.00',
        renewal: '10/18/2021'
      },
      {
        id: '2',
        name: 'Netflix',
        cost: '19.99',
        renewal: '10/18/2021'
      },
      {
        id: '3',
        name: 'HBO Max',
        cost: '10.99',
        renewal: '10/18/2021'
      }
    ]
  });




  return (
    <div className='container'>
      <h1 id='header'>SUBr</h1>
      <div className='outerBox'>
        <button className='logout-btn'>Logout</button>
        <Overview state={state}/>
      </div>
      <br/>
      <div>
        <SubDisplay state={state} />
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