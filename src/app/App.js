import React, { Component } from 'react';
import Modal from './modal/Modal';
import '../styles/index.scss';

class App extends Component {
  render() {
    var buttonStyle = {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <div className="App">
        <Modal message="Modal #" buttonStyle={buttonStyle} />
      </div>
    );
  }
}

export default App;
