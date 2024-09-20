import React from 'react';
import './dashboard.css'

function DeleteAccountModal({ onClose, onConfirm }) {
  return (
    <div className="overlay">
      <div className="delete-box">
        <h3>Are you sure you want to delete your account?</h3>
        <div className="modal-buttons">
          <button className="yes-button" onClick={onConfirm}>Yes</button>
          <button className="no-button" onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountModal;
