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

    {/* SOLO MUESTRO LA API SI ESCRIBEN ALGO, VACIO NO */}
    {searchValue.length > 0 && (
    <ul>
      {filteredInfo.map((item) => (
            <li key={item._id}>
              <p> Producto: {item.name} 
              <br/> Precio USD: {item.price}  
              <br/> Unidades disponibles: {item.availableUnits} </p>  
            </li>
          ))}
    </ul>
    )}
    </div>
  );
}

export { ShopSearch };