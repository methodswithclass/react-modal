import React, { Component } from 'react';
import './App.css';

import Modal from "./modal/Modal";

class App extends Component {

  render() {

  	var buttonStyle = {
  		top:"50%",
  		left:"50%",
  		transform:"translate(-50%, -50%)"
  	}

    return (
      <div className="App">

        <Modal message="Modal #" buttonStyle={buttonStyle}/>
        
      </div>
    );
  }
}


export default App;
