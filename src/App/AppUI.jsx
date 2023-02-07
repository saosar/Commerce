import React from 'react';
// Importamos nuestro contexto
import { ShopContext } from '../ShopContext';
import { ShopSearch } from '../ShopSearch';
import { Modal } from '../Modal';
import { CreateShopButton } from '../CreateShopButton';
import { ShopList } from '../ShopList';
import { ShopForm } from '../ShopForm';
// import { ShopSearchApi } from '../ShopSearchApi';
import { ShopSearchPrice } from '../ShopSearchPrice';

function AppUI() {
  const {

    openModal,
    setOpenModal
  } = React.useContext(ShopContext);

  return (
  
    <React.Fragment>

      {/* PARA ABRIR EL MODAL SE CREA UN BOTONCITO */}
      <CreateShopButton
        setOpenModal={setOpenModal}
      />

      <ShopSearch/>

      <ShopList /> 
      <ShopSearchPrice/> 
      
        {/* RENDER PROPS QUE ENVIAN FUNCION DE LA SIGUIENTE MANERA */}      

          {!!openModal && (
            <Modal>
              <ShopForm/>
            </Modal>
          )}

      
      {/* <Scroller></Scroller> */}
    </React.Fragment>
    
  );
}

export { AppUI };