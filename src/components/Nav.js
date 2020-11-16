/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <nav className="container">
          <Link to="/home"> Home</Link>
          <Link to="/riders"> Riders</Link>
          <Link to="/horses"> Horses</Link>
          {/* <Link to="/schedule"> Schedule</Link> */}
          <Link to="/login">Login</Link>
        </nav>
      </div>
    );
  }
}
