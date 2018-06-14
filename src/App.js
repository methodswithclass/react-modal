import React, { Component } from 'react';
import './App.css';

import Modal from "./modal/Modal";

class App extends Component {

  handleClick (e) {

      var view = document.getElementById("modal-view");

      view.classList.remove("hidden");
      view.classList.add("shown");
  }


  render() {
    return (
      <div className="App">

        <div className="modal-button btn center" onClick={this.handleClick}>
          <div className="center">open</div>
        </div>

        <Modal />
      </div>
    );
  }
}

export default App;
