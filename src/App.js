import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import Login from './components/Login/Login.js';

function App () {
  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
