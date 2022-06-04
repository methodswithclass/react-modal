import React from 'react';
import ReactDOM from 'react-dom';
import ModalBody from '../ModalBody';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalBody />, div);
  ReactDOM.unmountComponentAtNode(div);
});
