import React from 'react';
import './ShopSearchApi.css';
import { ShopContext } from '../ShopContext';

function ShopSearchApi() {
  // PARA GUARDAR EN UN ESTADO LOS VALORES DE LA API  ////api
  const { info } = React.useContext(ShopContext);
  return (
    <div>
        <ul>
      {info.map(item => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
    
  </div>
  )
};

export { ShopSearchApi }