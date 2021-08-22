import React, { Component } from 'react';
import shortid from 'shortid';
import InputForm from './component/InputForm/InputForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContacts = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    // const { contacts } = this.state;
    return (
      <>
        <InputForm onSubmit={this.addContacts} />
      </>
    );
  }
}

export default App;
