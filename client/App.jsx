import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Login from './components/Login';

import './stylesheet/style.css';


const App = props => {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
    </Switch>
  );
};

export default App;