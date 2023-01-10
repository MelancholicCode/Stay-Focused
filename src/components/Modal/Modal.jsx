import React from 'react';

const Modal = ({isActive, children}) => {
  return (
    <div className={`modal ${isActive ? 'modal_active' : null}`}>
      <div className="modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;