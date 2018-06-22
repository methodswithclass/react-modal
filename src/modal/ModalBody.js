
import React, { Component } from 'react';
import './ModalBody.css';






class ModalBody extends Component {
  

  handleClick (e) {

    this.props.click(e);
  }


  render () {

    var modalStyle = {
        position:"absolute",
        width:"100%",
        height:"100%",
        visibility:(this.props.open ? 'visible' : 'hidden')
    }

    return (
      <div style={modalStyle}>
        <div className="modal-background" onClick={(e) => this.handleClick(e)}></div>
        <div className="modal-inner center">
          
          <div className="modal-container center">
            <div className="modal-title hcenter">
              <div className="center">{this.props.message}{this.props.count}</div>
            </div>
            
            <div className="modal-button btn hcenter" onClick={(e) => this.handleClick(e)}>
              <div className="center">close</div>
            </div>

          </div>
        </div>
      </div>

    )
  }
}



export default ModalBody;
