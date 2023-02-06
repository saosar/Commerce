import React from 'react';
// Importamos nuestro contexto
import { ShopContext } from '../ShopContext';
import { ShopSearch } from '../ShopSearch';
import { Modal } from '../Modal';
import { CreateShopButton } from '../CreateShopButton';
import { ShopList } from '../ShopList';
import { ShopForm } from '../ShopForm';
<<<<<<< HEAD
// import { ShopSearchApi } from '../ShopSearchApi';
=======
import { ShopSearchPrice } from '../ShopSearchPrice';
>>>>>>> experimento

function AppUI() {
  const {

    openModal,
    setOpenModal
  } = React.useContext(ShopContext);

  return (
  
    <React.Fragment>
           
<<<<<<< HEAD
      <ShopSearch> 
      </ShopSearch> 

      {/* <ShopSearchApi/>*/}
=======
      <ShopSearch/> 
      <ShopSearchPrice/> 
>>>>>>> experimento
     
      
        {/* RENDER PROPS QUE ENVIAN FUNCION DE LA SIGUIENTE MANERA */}
          
          {/* PROBABLE CAMBIO PARA INGRESO DE LA INFO DE LA API */}
          <ShopList /> 

          {!!openModal && (
            <Modal>
              <ShopForm/>
            </Modal>
          )}

          {/* PARA ABRIR EL MODAL SE CREA UN BOTONCITO */}
      <CreateShopButton
        setOpenModal={setOpenModal}
        />
      {/* <Scroller></Scroller> */}
    </React.Fragment>
    
  );
}

export { AppUI };