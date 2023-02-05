import React from 'react';
import './ShopSearch.css';
import { ShopContext } from '../ShopContext';
import { getApiData } from '../GetData';

function ShopSearch() {
  // PARA GUARDAR EN UN ESTADO LOS VALORES DE LA API
  const [info,setInfo] = React.useState({
    cityFrom: "",
    cityTo: "",
    date: "",
    passengers: ""
  })
  React.useEffect(()=>{
    const data = async () => {
      const info = await getApiData()
      setInfo(info)
    }
    data()
    .catch((err) => {
      console.log(err.message);
   });
  },[]) 
  // function handleInputChange(e) {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value
  //   })
  // }



// PARA GUARDAR DE MANERA LOCAL LO QUE ESCRIBIO EL USUARIO
  const {searchValue, setSearchValue} = React.useContext(ShopContext);
  const onSearchValueChange = (event) => {  /* fn que permite que llame actualizar esgtado*/ 
    console.log(event.target.value); /*busca en consola donde esta el valor y pongo con punto*/
    setSearchValue(event.target.value);
  };

  return (
    <input 
      className="ShopSearch" 
      placeholder="Buscar producto"
      info={info}
      value={searchValue} 
      onChange={onSearchValueChange}  /* cuando input cambie ejecuta funcion*/

    />
  );
}

export { ShopSearch };