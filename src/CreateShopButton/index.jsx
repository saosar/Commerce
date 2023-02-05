import React from 'react';
import './CreateShopButton.css';

function CreateShopButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);  // se abra y se cierre al dar click al boton //true abre
  };

  return (
    <button
      className="CreateShopButton"
      onClick={onClickButton}
    >
      Purchase!
    </button>
  );
}

export { CreateShopButton };