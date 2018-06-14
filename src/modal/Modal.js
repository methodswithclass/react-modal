import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

  handleClick () {

    var view = document.getElementById("modal-view");

    view.classList.remove(this.state.open ? "shown" : "hidden");
    view.classList.add(this.state.open ? "hidden" : "shown")

    this.state.open = !this.state.open
  }



  render() {
    return (
      <div id="modal-view" className="Modal">
        <div className="modal-background"></div>
        <div className="modal-inner">
          
          <div className="modal-title">
            <p className="innerText">This is the modal :)</p>
          </div>
          
          <div className="modal-button" onClick={this.handleClick}>
            <p className="innerText">close</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Modal;
