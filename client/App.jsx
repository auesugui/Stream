import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import './stylesheet/style.scss';




const App = props => {
  return (
    <Switch>
      <Route path='/signup' component={Signup} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/' component={Login}/>
    </Switch>
  );
};

export default App;