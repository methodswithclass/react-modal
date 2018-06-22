import React, { Component } from 'react';
import './App.css';

import Modal from "./modal/Modal";

class App extends Component {


  constructor (props) {

    super(props);


    this.state = {
      open:false
    }
  }

  handleClick (e) {

      this.setState({open:true})
  }


  render() {
    return (
      <div className="App">

        <div className="modal-button btn center" onClick={this.handleClick}>
          <div className="center">open</div>
        </div>

        <Modal open={this.state.open}/>
      </div>
    );
  }
}


export default App;
