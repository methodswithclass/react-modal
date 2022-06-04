import React, { Component } from 'react';
import Button from './Button';
import ModalBody from './ModalBody';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      count: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      const { open, count } = prevState;
      return {
        open: !open,
        count: count + (open ? 1 : 0),
      };
    });
  }

  render() {
    const { message } = this.props;
    const { open, count } = this.state;
    return (
      <div className="Modal">
        <Button handleClick={this.handleClick} />
        <ModalBody
          message={message}
          open={open}
          count={count}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Modal;
