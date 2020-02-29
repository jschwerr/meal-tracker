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
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" }
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <Router>
        <NavBar></NavBar>
        <br />
        <div class="container">
          <Route path="/" exact component={ Home } />
          <Route path="/food" component={ FoodList } />
          <Route path="/create-food" component= { CreateFood } />
        </div>
      </Router>
    );
  }
}

export default App;
