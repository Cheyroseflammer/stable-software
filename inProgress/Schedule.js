import React, { Component } from 'react';

export default class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <header>
          <h1>Schedule</h1>
        </header>

        <body>
          <form>
            <p>Pick a day</p>
            <select name="day">
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday" selected="selected">
                Wednesday
              </option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>

            <h3>Wednesday</h3>

            <ol>
              <li>9am Ransom</li>
              <li>2pm Joker</li>
            </ol>
          </form>
        </body>
      </div>
    );
  }
}
