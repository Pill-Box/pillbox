import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from './containers/Start/start'
import './App.css'

const App = () => (
  <Router>
     
      <div>
        <Switch>
        <Route exact path='/' component={Start} />
        </Switch>
        </div>

   
  </Router>

);

export default App;