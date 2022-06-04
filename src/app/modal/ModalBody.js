import React from 'react';

const ModalBody = (props) => {
  const { handleClick, open, message, count } = props;

  return (
    <>
      {open ? (
        <>
          <div className="modal-background" onClick={handleClick}></div>
          <div className="modal-inner center">
            <div className="modal-container center">
              <div className="modal-title hcenter">
                <div className="center">{`${message}${count}`}</div>
              </div>

              <button
                className="modal-button btn hcenter"
                onClick={handleClick}
              >
                close
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalBody;
