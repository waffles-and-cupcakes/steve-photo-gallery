import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel.jsx';
import style from './Modal.css';

const Modal = (props) => (
  props.open ? (
    <div>
      <div className={style.modal}>
        <button className={style.modalClose} onClick={props.toggleModal}>
          <svg viewBox="0 0 40 40">
            <path className={style.closeX} d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className={style.modalContent}>
          <Carousel photos={props.photos} />
        </div>
      </div>
    </div>
  ) : null
);

Modal.propTypes = {
  open: PropTypes.boolean,
  photos: PropTypes.array,
  toggleModal: PropTypes.function,
};

export default Modal;
