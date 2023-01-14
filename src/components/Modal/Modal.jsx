import React from 'react';

const Modal = ({isActive, setIsActive, children}) => {
  return (
    <div onClick={() => setIsActive(false)} className={`modal ${isActive ? 'modal_active' : null}`}>
      <div onClick={e => e.stopPropagation()} className="modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;