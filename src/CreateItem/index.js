import React from 'react';
import './CreateItem.css';

function CreateItem(props) {

  return(
    <button
      className="create-btn"
      onClick={() => {
        props.setOpenModal(state => (!state))
      }} 
    >
      +
    </button>
  );
}

export { CreateItem };