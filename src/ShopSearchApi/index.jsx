import React from 'react';
import './ShopSearchApi.css';
import { ShopContext } from '../ShopContext';

function ShopSearchApi(props) {
  // PARA GUARDAR EN UN ESTADO LOS VALORES DE LA API  ////api
  const { info } = React.useContext(ShopContext);

  return (
     <div>
        <ul>
      {info.map(item => (
        <li key={item._id}>
          {/* <p> Producto: {item.name}</p>  
          <p> Precio: {item.price} </p> 
          <p> Unidades disponibles: {item.availableUnits} </p>  */}
        </li>
      ))}
    </ul>
   </div>


  );

 }
export { ShopSearchApi }