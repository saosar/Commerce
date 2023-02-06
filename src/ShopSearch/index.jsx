import React from 'react';
import './ShopSearch.css';
import { ShopContext } from '../ShopContext';

function ShopSearch() {
  const { info } = React.useContext(ShopContext);    ///API
  const {searchValue, setSearchValue} = React.useContext(ShopContext);   //USUARIO
  const [sortType, setSortType] = React.useState('none');  ///CREA ESTADO PARA FILTRAR INFO 

  //PARA FILTRAR LA INFO DEACUERDO AL "name" de LA API // PARA GUARDAR DE MANERA LOCAL LO QUE ESCRIBIO EL USUARIO   ///USUARIO  //INPUT CHANGE
  const handleSearch = (event) => {  /* USUARIO fn que permite que llame actualizar esgtado*/ 
    setSearchValue(event.target.value);
  };
  const filteredInfo = info.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase().trim()));

  ////BORRAR LA BARRA BUSQUEDA
  const handleClear = () => {
    setSearchValue("");
  };


  //// FILTRAR EL RESULTADO DE MENOR A MAYOR Y MAYOR A MENOR PRECIO
  const handleSort = (sortType) => {
    setSortType(sortType);
  };

  let sortedInfo = filteredInfo;
  if (sortType === 'asc') {
    sortedInfo = filteredInfo.sort((a, b) => a.price - b.price);
  } else if (sortType === 'desc') {
    sortedInfo = filteredInfo.sort((a, b) => b.price - a.price);
  }
//////----------


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

    {/* PARA FILTRO LUEGO DE BUSQUEDA */}
    <select value={sortType} onChange={e => handleSort(e.target.value)}>
      <option value="none">Sin filtro</option>
      <option value="asc">Menor a mayor precio</option>
      <option value="desc">Mayor a menor precio</option>
    </select>
    
    {searchValue.length > 0 && (
    <ul>

      {sortedInfo.map((item) => (
            <li key={item._id}>
              <p> Producto: {item.name} 
              <br/> Precio USD: {item.price}  
              <br/> Unidades disponibles: {item.availableUnits} </p>
            </li>
          ))}
    </ul>
    )}
    </div>
  )
}

export { ShopSearch };