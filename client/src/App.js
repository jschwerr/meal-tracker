import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavBar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import FoodList from "./components/food/food-list.jsx"
import CreateFood from "./components/food/create-food.jsx"


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar></NavBar>
        <br />
        <div className="container">
          <Route path="/" exact component={ Home } />
          <Route path="/food" component={ FoodList } />
          <Route path="/create-food" component= { CreateFood } />
        </div>
      </Router>
    );
  }
}

export default App;
