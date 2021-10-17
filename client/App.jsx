import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import './stylesheet/style.css';



const App = props => {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/signup' component={Signup}/>
    </Switch>
  );
};

export default App;