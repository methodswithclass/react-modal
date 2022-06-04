import React, { Component } from 'react';

class Button extends Component {
  handleClick(e) {
    this.props.click(e);
  }

  render() {
    return (
      <div className="Button">
        <div
          className="btn"
          style={this.props.buttonStyle}
          onClick={(e) => this.handleClick(e)}
        >
          <div className="center">open</div>
        </div>
      </div>
    );
  }
}

export default Button;
