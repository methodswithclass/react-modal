import React, { Component } from 'react';
import './Modal.css';


import Button from "./Button";
import ModalBody from "./ModalBody";



class Modal extends Component {


  constructor (props) {

    super(props);

    this.state = {
      open:false,
      count:1
    }


    this.handleClick = this.handleClick.bind(this);

  }


  handleClick (e) {

    this.setState({
        open:!this.state.open,
        count:this.state.count+(this.state.open ? 1 : 0)
    });
  }


  render() {

    return (
      <div className="Modal">
        <Button click={this.handleClick} buttonStyle={this.props.buttonStyle} />  {/*//*/}

        <ModalBody message={this.props.message} open={this.state.open} count={this.state.count} click={this.handleClick} />

      </div>
    );
  }
}

export default Modal;



