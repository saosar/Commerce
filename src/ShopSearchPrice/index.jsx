import React from 'react';
import './ShopSearchPrice.css';
import { ShopContext } from '../ShopContext';

function ShopSearchPrice() {
  const { info } = React.useContext(ShopContext);
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(Infinity);

  const filteredInfo = info.filter(
    item => item.price >= minPrice && item.price <= maxPrice
  );

  const onMinPriceChange = event => {
    setMinPrice(event.target.value);
  };

  const onMaxPriceChange = event => {
    setMaxPrice(event.target.value);
  };

  ////BORRAR LA BARRA BUSQUEDA
  const handleClear = () => {
    setMaxPrice(Infinity);
    setMinPrice(0);
  };

  return (
    <div>
      <div>
        <label>
          Filtrar por precio mínimo:
          <input
            type="number"
            value={minPrice}
            onChange={onMinPriceChange}
          />
        </label>
        <label>
          Filtrar por precio máximo:
          <input
            type="number"
            value={maxPrice}
            onChange={onMaxPriceChange}
          />
        </label>
      </div>

      <button onClick={handleClear}>Clear</button>   {/*BORRAR BARRA BUSQUEDA - VUELVE ESTADO INICIAL*/}

      {minPrice.length > 0  &&  maxPrice.length > 0 && (
      <div>
        {filteredInfo.length >0 ?(
          <ul>
          {filteredInfo.map((item) => (
            <li key={item._id}>
              <p> Producto: {item.name} 
              <br/> Precio USD: {item.price}  
              <br/> Unidades disponibles: {item.availableUnits} </p>
            </li>
          ))}
          </ul>
          
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    )}

    </div>
  );
};

export { ShopSearchPrice };