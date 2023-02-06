import React from 'react';
import './ShopSearch.css';
import { ShopContext } from '../ShopContext';

function ShopSearch() {
  const { info } = React.useContext(ShopContext);    ///API
  const {searchValue, setSearchValue} = React.useContext(ShopContext);   //USUARIO
//PARA FILTRAR LA INFO DEACUERDO AL "name" de LA API // PARA GUARDAR DE MANERA LOCAL LO QUE ESCRIBIO EL USUARIO   ///USUARIO  //INPUT CHANGE
  const handleSearch = (event) => {  /* USUARIO fn que permite que llame actualizar esgtado*/ 
    setSearchValue(event.target.value);
  };
  const filteredInfo = info.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase().trim()));

//FILTRA POR PRECIO 
  const {priceRange, setPriceRange} = React.useContext(ShopContext)
  React.useState({ min: 0, max: Infinity });
  const filteredInfoPrice = info.filter(
    item => item.price >= priceRange.min && item.price <= priceRange.max
  );
  const onPriceRangeChange = event => {
    const { min, max } = event.target.value;
    setPriceRange({ min, max });
  };
  



  ////BORRAR LA BARRA BUSQUEDA
  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <div>
    <input 
      type="text"
      className="ShopSearch" 
      placeholder="Buscar producto"
      info={info}
      value={searchValue} 
      onChange={handleSearch}  /* cuando input cambie ejecuta funcion*/
    />
    <button onClick={handleClear}>Clear</button>   {/*BORRAR BARRA BUSQUEDA*/}

{/* FILTRAR LA INFO POR PRECIO*/}
    <div>
        <label>
          Filtrar por precio
          <input
            type="range"
            min={0}
            max={1500}
            value={priceRange}
            onChange={onPriceRangeChange}
          />
        </label>
    </div>
    <ul>
        {filteredInfoPrice.map(item => (
          <li key={item._id}>
            {/* <p>Nombre del producto: {item.name}</p>
            <p>Precio: {item.price}</p>
            <p>Unidades disponibles: {item.availableUnits}</p> */}
          </li>
        ))}
      </ul>

{/* FILTRAR LA INFO POR PRODUCTO */}
    <ul>
      {filteredInfo.map((item) => (
            <li key={item._id}>
              <p> Producto: {item.name} 
              <br/> Precio USD: {item.price} </p>  
              {/* <p> Precio: {item.price} </p> 
              <p> Unidades disponibles: {item.availableUnits} </p>  */}
            </li>
          ))}
    </ul>
    </div>

  );
}

export { ShopSearch };