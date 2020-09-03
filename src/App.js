import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Guest from './Pages/Guest';
import User from './Pages/User';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
