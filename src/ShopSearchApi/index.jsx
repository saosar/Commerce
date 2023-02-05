import React from 'react';
import './ShopSearchApi.css';
import { ShopContext } from '../ShopContext';

function ShopSearchApi(props) {
  // PARA GUARDAR EN UN ESTADO LOS VALORES DE LA API  ////api
  const { info, CreateShopButton } = React.useContext(ShopContext);


  //// CREAR EL BOTON DE COMPRAR
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);  // se abra y se cierre al dar click al boton //true abre
  };
  return (
     <div>
        <ul>
      {info.map(item => (
        <li key={item._id}>
          <p> Producto: {item.name}</p>  
          <p> Precio: {item.price} </p> 
          <p> Unidades disponibles: {item.availableUnits} </p> 
        </li>
      ))}
    </ul>

    

   </div>
    <button
      className="CreateShopButton"
      onClick={onClickButton}
    >
      Purchase!
    </button>

  );


export { ShopSearchApi }