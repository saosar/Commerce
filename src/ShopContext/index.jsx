import React from 'react';
import { getApiData } from '../GetData'; ////api
// import { ShopSearch } from '../ShopSearch';
// import { CreateShopButton } from '../CreateShopButton';
// import { useLocalStorage } from './useLocalStorage';

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const ShopContext = React.createContext();

function ShopProvider(props) {

  // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
  const [searchValue, setSearchValue] = React.useState('');    //BARRA DE SEARCH
  // const [priceRange, setPriceRange] = React.useState({ min: 0, max: Infinity });    //BARRA DE SEARCH por PRICE

  const[openModal,setOpenModal] = React.useState(false);

  ///////////PARA EL CARRO
  const [cart, setCart] = React.useState([]);
  const [Product] = React.useState([]);
  const [addToCart] = React.useState([]);


  ///ACTUALIZA EL ESTADO DE data que viene de getData para guardar la API y usar en shopsearchapi  ////api
  const [info, setInfo] = React.useState([]);    //VIENE DE getApiData
  React.useEffect(() => {      //MUESTRE EN PANTALLA LA INFODE LAS API (que configura en shopsearchapi)
    const data = async () => {
      const info = await getApiData();
      setInfo(info);
    };
    data();
  }, []);

  // const [data, setData] = React.useState([]); 
  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
  return (
    <ShopContext.Provider value={{
     
      searchValue,      //BARRA DE SEARCH
      setSearchValue,   //BARRA DE SEARCH
      // priceRange,   //BARRA SEARCH PRICE
      // setPriceRange, //BARRA SEARCH PRICE

      openModal,
      setOpenModal,

      info,       ////QUEDA GUARDADA TODA LA INFO DE LA API. ES LA VARIABLE API VRGA
      // fetchData 
      
      // data, 
      // setData,


      ///PARA EL CARRO 
      cart,
      setCart,
      Product,
      addToCart,

    }}>
      {props.children}
    </ShopContext.Provider>
  );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { ShopContext, ShopProvider };