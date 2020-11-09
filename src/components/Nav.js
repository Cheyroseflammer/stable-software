/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <a href="#"> Home </a>
        <a href="#"> Horses </a>
        <a href="#"> Riders </a>
        <a href="#"> Schedule </a>
        <a href="#"> Login/Sign Up </a>
      </div>
    );
  }
}
