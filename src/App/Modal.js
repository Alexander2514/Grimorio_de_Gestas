import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
  // Este código saca el contenido y lo inyecta en el div 'modal' del HTML
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal') 
  );
}

export { Modal };