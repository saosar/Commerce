import React from 'react';
import { getApiData } from '../GetData'; ////api
// import { useLocalStorage } from './useLocalStorage';

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const ShopContext = React.createContext();

function ShopProvider(props) {
  // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
  
  const [searchValue, setSearchValue] = React.useState('');    //BARRA DE SEARCH

  const[openModal,setOpenModal] = React.useState(false);


  ///ACTUALIZA EL ESTADO DE data que viene de getData para guardar la API y usar en shopsearchapi  ////api
  const [data, setData] = React.useState([]);    //VIENE DE getApiData
  const fetchData = async () => {
    const apiData = await getApiData();
    setData(apiData);
  };
  
  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
  return (
    <ShopContext.Provider value={{
     
      searchValue,      //BARRA DE SEARCH
      setSearchValue,   //BARRA DE SEARCH

      openModal,
      setOpenModal,

      data,       ////api
      fetchData 
    }}>
      {props.children}
    </ShopContext.Provider>
  );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { ShopContext, ShopProvider };