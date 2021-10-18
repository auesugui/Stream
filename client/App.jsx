import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import './stylesheet/style.css';




const App = props => {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/signup' component={Signup} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  );
};

export default App;