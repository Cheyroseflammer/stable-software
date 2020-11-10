import React, { Component } from 'react';
import StableForm from './StableForm';

export default class AddRider extends Component {
  render() {
    return (
      <section className="AddRider">
        <h2>Create a Rider</h2>
        <StableForm>
          <div className="fields">
            <label htmlFor="rider-name-input">Name</label>
            <input type="text" id="rider-name-input" />
          </div>
          <div className="buttons">
            <button type="submit">Add Rider</button>
          </div>
        </StableForm>
      </section>
    );
  }
}
