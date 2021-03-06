import React from 'react'
import './rxModal.css'

const RxModal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
  return ( 
    <div className={showHideClassName}>
      <section className="modal-main modal-guts">
        {children}
        <button className="standard-btn rxModal-close" id='modal' onClick={handleClose}>CLOSE</button>
      </section>
    </div>
   
  )
}

export default RxModal