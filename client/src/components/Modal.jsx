import React from 'react';
import './Modal.css';

const Modal = (props) => {
  console.dir(props.photos);
  return props.open ? (
    <div>
      <div className="modal">
        <button className="modal-close" onClick={props.toggleModal}>
          <svg viewBox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;