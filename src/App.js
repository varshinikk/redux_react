import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Addition from './Task1/Addition';
import Ageupdown from './Component/Ageupdown';
import Task2 from './Component/Task2';

function App() {
  return (
  <div>
  <Router>
    <switch>
    <Route exact path = "/Example1" component = {Example1}></Route>
    <Route exact path = "/Example2" component = {Example2}></Route>
    <Route exact path = "/Example3" component = {Example3}></Route>
    <Route exact path = "/Addition" component = {Addition}></Route>
    <Route exact path = "/Ageupdown" component = {Ageupdown}></Route>
    <Route exact path = "/Task2" component = {Task2}></Route>
    </switch>
  </Router>
  </div>
  )
}

export default App;