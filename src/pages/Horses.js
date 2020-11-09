import React, { Component } from 'react';

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
          <table>
            <thead>
              <th>Rider</th>
              <th>Name</th>
              <th>Age</th>
              <th>Breed</th>
            </thead>
            <tbody>
              <tr>
                <th class="rider">Chey</th>
                <td>Joker</td>
                <td>15 years</td>
                <td>Appolusa</td>
              </tr>
              <tr>
                <th class="rider">Megan</th>
                <td>Ransom</td>
                <td>6 years</td>
                <td>Throughobred</td>
              </tr>
              <tr>
                <th class="rider">Lindsay</th>
                <td>Cynik</td>
                <td>27 years</td>
                <td>Arabian</td>
              </tr>
            </tbody>
          </table>
        </body>
      </div>
    );
  }
}
