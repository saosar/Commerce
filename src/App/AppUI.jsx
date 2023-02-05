import React from 'react';
// Importamos nuestro contexto
import { ShopContext } from '../ShopContext';
import { ShopSearch } from '../ShopSearch';
import { Modal } from '../Modal';
import { CreateShopButton } from '../CreateShopButton';
import { ShopList } from '../ShopList';
import { ShopForm } from '../ShopForm';
import { ShopSearchApi } from '../ShopSearchApi';

function AppUI() {
  const {

    openModal,
    setOpenModal
  } = React.useContext(ShopContext);

  return (
  
    <React.Fragment>
           
      <ShopSearch />
      <ShopSearchApi/>
     
      
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