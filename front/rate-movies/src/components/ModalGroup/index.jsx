import React from 'react';
import Modal from 'react-modal';
import close from '../../assets/close.png'
import MoviesAdd from '../MoviesAdd/'

export function ModalGroup(props) {
  
  return (
    <Modal 
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type="button" 
        onClick={props.onRequestClose} 
        className="react-modal-close"
      >
        <img src={close} alt="Close"/>
      </button>

      <MoviesAdd />

      
    </Modal> 
  );
}