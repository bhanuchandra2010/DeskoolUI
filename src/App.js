import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Guest from './Pages/Guest';
import User from './Pages/User';
import Protected from './Components/Protected';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/user" component={User} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Guest} />
          {/* <Route exact path="/">
            <Protected cmp={Guest} />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
