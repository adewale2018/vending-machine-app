import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';
import Sardines from './Sardines';
import Chips from './Chips';
import Soda from './Soda';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact="true" path="/" render={() => <VendingMachine/>} />
          <Route exact="true" path="/chips" render={() => <Chips/>} />
          <Route exact="true" path="/sardines" render={() => <Sardines/>} />
          <Route exact="true" path="/soda" render={() => <Soda/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
