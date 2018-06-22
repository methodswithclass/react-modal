import React, { Component } from 'react';
import './Modal.css';



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

    var modalStyle = {
        position:"absolute",
        width:"100%",
        height:"100%",
        visibility:(this.state.open ? 'visible' : 'hidden')
    }


    return (
      <div className="Modal">
        <div className="btn center" onClick={this.handleClick}>
          <div className="center">open</div>
        </div>


        <div style={modalStyle}>
          <div className="modal-background" onClick={this.handleClick}></div>
          <div className="modal-inner center">
            
            <div className="modal-container center">
              <div className="modal-title hcenter">
                <div className="center">{this.props.message}{this.state.count}</div>
              </div>
              
              <div className="modal-button btn hcenter" onClick={this.handleClick}>
                <div className="center">close</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Modal;



