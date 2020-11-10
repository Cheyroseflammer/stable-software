import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Riders extends Component {
  render() {
    return (
      <div className="riders">
        <h2>Riders</h2>

        <h3>Add Rider</h3>
        <Link to="/addrider">
          <button>Add Rider</button>
        </Link>
      </div>
    );
  }
}
