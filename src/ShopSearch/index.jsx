import React from 'react';
import './ShopSearch.css';
import { ShopContext } from '../ShopContext';

function ShopSearch() {
  const { info } = React.useContext(ShopContext);
  const {searchValue, setSearchValue} = React.useContext(ShopContext);
//PARA FILTRAR LA INFO DEACUERDO AL "name" de LA API // PARA GUARDAR DE MANERA LOCAL LO QUE ESCRIBIO EL USUARIO   ///USUARIO  //INPUT CHANGE
  const handleSearch = (event) => {  /* fn que permite que llame actualizar esgtado*/ 
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