import React from 'react'
const Modal = props => {
  if (!props.show){
    return null
  }
  return(
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">To Use the Crystal Ball:</h4>
        </div>
        <div className='modal-body'>
        Think of a question you wish for the crystal ball to answer. Ask the ball your question, then click on it when you are ready for the answer.
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )
}
export default Modal;