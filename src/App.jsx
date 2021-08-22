import React, { Component } from 'react';
import InputForm from './component/InputForm/InputForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <InputForm />
      </>
    );
  }
}

export default App;
