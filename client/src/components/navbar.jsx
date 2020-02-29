import React from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
        <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
      </a>
      <Link to="/" className="navbar-brand">Meal Tracker</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/create-user" className="nav-link">Add User</Link>
          </li>
          <li className="navbar-item">
            <Link to="/users" className="nav-link">List Users</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create-food" className="nav-link">Add Food</Link>
          </li>
          <li className="navbar-item">
            <Link to="/food" className="nav-link">List Food</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
