import React from 'react'
import reactDom from 'react-dom';


export const Modal = ({ openModal, closeModal, congrat }) => {
    let isValid = openModal ? 'is-active' : '';

    return reactDom.createPortal(
        <div onClick={closeModal} className={`modal is-mobile ${isValid}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <section className="modal-card-body">

                    {congrat}
                </section>
            </div>
            <button onClick={closeModal} className="modal-close is-large" aria-label="close"></button>
        </div>
        , document.getElementById('modal'))
}
