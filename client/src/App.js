import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from './containers/Start/start'
import Login from './containers/Login/login'
import Info from './containers/Info/info'
import SignUp from './containers/signup/signup'
import Reset from './containers/Reset/reset'
import Dashboard from './containers/Dashboard/dashboard'
import AddRx from './containers/addRx/addRx'
import AddPatient from './containers/addPatient/addPatient'
import Calendar from './containers/calendar/calendar'
import './App.css'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/reset' component={Reset} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/addRx' component={AddRx} />
        <Route exact path='/addpatient' component={AddPatient} />
        <Route exact path='/calendar' component={Calendar} />
      </Switch>
    </div>
  </Router>
);

export default App;