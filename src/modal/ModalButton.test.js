import React from 'react';
import ReactDOM from 'react-dom';
import ModalButton from './ModalButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
