import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

  handleClick (e) {

    var view = document.getElementById("modal-view");

    if (view) {

      view.classList.remove("shown");
      view.classList.add("hidden");
    }

  }



  render() {
    return (
      <div id="modal-view" className="Modal hidden">
        <div className="modal-background" onClick={this.handleClick}></div>
        <div className="modal-inner center">
          
          <div className="modal-container center">
            <div className="modal-title hcenter">
              <div className="center">This is the modal :)</div>
            </div>
            
            <div className="modal-button btn hcenter" onClick={this.handleClick}>
              <div className="center">close</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
