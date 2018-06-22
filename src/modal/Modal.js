import React, { Component } from 'react';
import './Modal.css';

import ModalBody from "./ModalBody"

class Modal extends Component {


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
      <div className="Button">
        <div className="btn center" onClick={this.handleClick}>
          <div className="center">open</div>
        </div>

        <ModalBody open={this.state.open}/>
      </div>
    );
  }
}

export default Modal;



