import React, { Component } from 'react';

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
            <button class="horses">Horses</button>
          </div>
          <div class="rider-roster">
            <h2>Megan</h2>
            <button class="horses">Horses</button>
          </div>
          <div class="rider-roster">
            <h2>Lindsay</h2>
            <button class="horses">Horses</button>
          </div>
        </body>
      </div>
    );
  }
}
