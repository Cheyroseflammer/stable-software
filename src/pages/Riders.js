import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Riders extends Component {
  render() {
    return (
      <div className="riders">
        <header>
          <h1>Rider Roster</h1>
        </header>

        <body>
          <div class="rider-roster">
            <h2>Chey</h2>
            <Link to="/horses">
              <button class="horses">Horses</button>
            </Link>
          </div>
          <div class="rider-roster">
            <h2>Megan</h2>
            <Link to="/horses">
              <button class="horses">Horses</button>
            </Link>
          </div>
          <div class="rider-roster">
            <h2>Lindsay</h2>
            <Link to="/horses">
              <button class="horses">Horses</button>
            </Link>
          </div>
        </body>
      </div>
    );
  }
}
