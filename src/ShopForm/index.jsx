import React from 'react';
import { ShopContext } from '../ShopContext';
import './ShopForm.css';

function ShopForm() {
  // Creamos un estado para nuestro nuevo TODO
  const [newShopValue, setNewShopValue] = React.useState('');
  // Desestructuramos las funciones que necesitamos para añadir una compra y cerrar nuestro modal
  const {
    setOpenModal,
  } = React.useContext(ShopContext);
  
  // Creamos una función para actualizar el estado de la nueva compra
  const onChange = (event) => {
    setNewShopValue(event.target.value);
  };
  
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
    // También estaría bien resetear nuestro formulario
    setNewShopValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Realiza una nueva compra</label>

      {/* CAMBIAR POR EL PRODUCTO SELECCIONADO POR EL CLIENTE EN CARRITO */}
      <textarea
        value={newShopValue}
        onChange={onChange}
        placeholder="PRODUCTO A COMPRAR"
      />


      <div className="ShopForm-buttonContainer">
        <button
          type="button"
          className="ShopForm-button ShopForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar compra
        </button>


        <button
          type="submit"
          className="ShopForm-button ShopForm-button--add"
        >
          Pagar $
        </button>
      </div>
    </form>
  );
}

export { ShopForm };