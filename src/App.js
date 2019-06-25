import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Addition from './Task1/Addition';
import Ageupdown from './Component/Ageupdown';
import Task2 from './Component/Task2';
import Task3 from './Component/Task3';
import Task4 from './Component/Task4';
import Form from './Form';
import Form1 from './Form1';

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
    <Route exact path = "/Task3" component = {Task3}></Route>
    {/* <Route exact path = "/Task4" component = {Task4}></Route> */}
    <Route exact path = "/Form" component = {Form}></Route>
    <Route exact path = "/Form1" component = {Form1}></Route>
    </switch>
  </Router>
  </div>
  )
}

export default App;