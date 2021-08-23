import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // console.log(event.currentTarget);
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state)
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          NAME
          <input
            id="name"
            value={name}
            onChange={this.handelChange}
            type="tex"
            name="name"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            // required
          />
        </label>

        <label>
          TEL
          <input
            id="number"
            value={number}
            onChange={this.handelChange}
            type="tex"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            // required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default InputForm;
