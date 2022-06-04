import React, { useState } from 'react';
import ModalBody from './ModalBody';

const Modal = (props) => {
  const { message } = props;

  const [open, setOpen] = useState(false);
  const [count, increment] = useState(1);

  const handleClick = () => {
    increment(count + (open ? 1 : 0));
    setOpen(!open);
  };

  return (
    <div className="Modal">
      <button className="btn center" onClick={handleClick}>
        open
      </button>
      <ModalBody
        message={message}
        open={open}
        count={count}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Modal;
