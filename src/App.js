import Navbar from './Navbar';
import './App.css';
import Fetch from './fetchusers';
import AddUser from "./AddUser";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact="true" path="/">
            <Fetch />
          </Route>
          <Route path="/add">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

