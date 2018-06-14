import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from "./modal/Modal";

class App extends Component {

  handleClick (e) {

    
  }


  render() {
    return (
      <div className="App">

        <div className="modal-button" onClick={this.handleClick}>open</div>

        <Modal />
      </div>
    );
  }
}

export default App;
