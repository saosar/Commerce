import React from 'react';
import { ShopContext } from '../ShopContext';
import './ShopForm.css';

function ShopForm() {
  // Desestructuramos las funciones que necesitamos para añadir una compra y cerrar nuestro modal
  const {
    setOpenModal,
  } = React.useContext(ShopContext);
  
  // Función para cerrar el modal luego de añadir
  const onCancel = () => {
    setOpenModal(false);
  };
  
  // Función para agregar nueva COMPRA
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Cerramos nustro modal
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Realiza una nueva compra</label>

      {/* CAMBIAR POR EL PRODUCTO SELECCIONADO POR EL CLIENTE EN CARRITO */}
      <div className="ShopForm-buttonContainer">
        <button
          type="button"
          className="ShopForm-button ShopForm-button--cancel"
          onClick={onCancel}
          >
          Cancel  ✖️ 
        </button>

        <button
          type="submit"
          className="ShopForm-button ShopForm-button--add"
        >
          Pay 💲
        </button>
      </div>
    </form>
  );
}

export { ShopForm };