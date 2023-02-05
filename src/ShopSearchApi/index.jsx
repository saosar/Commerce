import React, { useContext } from 'react';
import './ShopSearchApi.css';
import { ShopContext } from '../ShopContext';

function ShopSearchApi() {
  // PARA GUARDAR EN UN ESTADO LOS VALORES DE LA API  ////api
  const { data, fetchData } = useContext(ShopContext);
  return (
    <div>
    <button onClick={fetchData}>Get API Data</button>
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>

  )
};

export { ShopSearchApi }