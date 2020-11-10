import React, { Component } from 'react';
import AddHorse from '../components/AddHorse';

export default class Horses extends Component {
  render() {
    return (
      <div className="horses">
        <header>
          <h1>Horses</h1>
          <form>
            <p>What would you like to sort by?</p>
            <select name="horses">
              <option value="name">Name</option>
              <option value="age">Age</option>
              <option value="breed">Breed</option>
            </select>
          </form>
        </header>

        <body>
          <AddHorse />
        </body>
      </div>
    );
  }
}
