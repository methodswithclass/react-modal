import React, { Component } from 'react';
import Modal from './modal/Modal';
import '../styles/index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal message="Modal #" />
      </div>
    );
  }
}

export default App;
