import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from './containers/Start/start'
import Login from './containers/Login/login'
import Info from './containers/Info/info'
import './App.css'

const App = () => (
  <Router>
     
      <div>
        <Switch>
        <Route exact path='/' component={Start} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/info' component={Info} />
        </Switch>
        </div>

   
  </Router>

);

export default App;