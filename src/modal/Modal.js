import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {


  constructor (props) {

    super(props);

    this.states = {
      open:this.props.open
    };

  }

  handleClick (e) {

    this.setState({open:false});

  }



  render() {
    return (
      <div className="Modal" style={{"visibility":(this.state.open ? 'visible' : 'hidden')}}>
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
