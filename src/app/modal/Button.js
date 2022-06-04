import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button className="btn center" onClick={handleClick}>
        open
      </button>
    );
  }
}

export default Button;
