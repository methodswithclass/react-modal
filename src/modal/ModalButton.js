import React, { Component } from 'react';
import './ModalButton.css';

class ModalButton extends Component {


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
      <div className="Button" style={{"visibility":(this.state.open ? 'visible' : 'hidden')}}>
        <div className="btn center" onClick={this.handleClick}>
          <div className="center">open</div>
        </div>

        <Modal open={this.state.open}/>
      </div>
    );
  }
}

export default Modal;
