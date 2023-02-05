import React from 'react';
import './ShopSearch.css';
import { ShopContext } from '../ShopContext';

function ShopSearch() {
  const { info } = React.useContext(ShopContext);
 // PARA GUARDAR DE MANERA LOCAL LO QUE ESCRIBIO EL USUARIO   ///USUARIO  //INPUT CHANGE
  const {searchValue, setSearchValue} = React.useContext(ShopContext);

  // const onSearchValueChange = (event) => {  /* fn que permite que llame actualizar esgtado*/ 
  //   console.log(event.target.value); /*busca en consola donde esta el valor y pongo con punto*/
  //   setSearchValue(event.target.value);
  // };

//PARA FILTRAR LA INFO DEACUERDO AL "name" de LA API
  const onSearchValueChange = (event) => {  /* fn que permite que llame actualizar esgtado*/ 
    setSearchValue(event.target.value);
  };
  const filteredInfo = info.filter(item => item.name.toLowerCase().includes(searchValue));
  

  return (
    <div>
    <input 
      type="text"
      className="ShopSearch" 
      placeholder="Buscar producto"
      info={info}
      value={searchValue} 
      onChange={onSearchValueChange}  /* cuando input cambie ejecuta funcion*/
    />
    <ul>
      {filteredInfo.map(item => (
            <li key={item._id}>
              <p> Producto: {item.name}</p>  
              <p> Precio: {item.price} </p> 
              <p> Unidades disponibles: {item.availableUnits} </p> 
            </li>
          ))}

    </ul>
    </div>

  );
}

export { ShopSearch };