import React from 'react';
import { Signup, Signin } from './components/signin-up';
import {Home} from './components/home'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

const App = () => {

  return (

          <Router>
            <div>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
            </Switch>
            </div>
          </Router>
   

  );
}

export default App;
