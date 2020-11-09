import React, { Component } from 'react';
import { Button, Input, Required } from './Utilities';

export default class Signup extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, nick_name, user_name, password } = ev.target;

    console.log('registration form submitted');
    console.log({ full_name, nick_name, user_name, password });

    full_name.value = '';
    nick_name.value = '';
    user_name.value = '';
    password.value = '';
    this.props.onRegistrationSuccess();
  };

  render() {
    const { error } = this.state;
    return (
      <form className="Signup" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name">
          <label htmlFor="Signup__full_name">
            Full name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            required
            id="Signup__full_name"
          ></Input>
        </div>
        <div className="user_name">
          <label htmlFor="Signup__user_name">
            User name <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="Signup__user_name"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="Signup__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="Signup__password"
          ></Input>
        </div>
        <div className="nick_name">
          <label htmlFor="Signup__nick_name">Nickname</label>
          <Input
            name="nick_name"
            type="text"
            required
            id="Signup__nick_name"
          ></Input>
        </div>
        <Button type="submit">Register</Button>
      </form>
    );
  }
}
