import React from 'react';
// Importamos nuestro contexto
import { ShopContext } from '../ShopContext';
import { ShopSearch } from '../ShopSearch';
import { Modal } from '../Modal';
import { CreateShopButton } from '../CreateShopButton';
import { ShopList } from '../ShopList';
import { ShopForm } from '../ShopForm';
import { ShopSearchPrice } from '../ShopSearchPrice';

function AppUI() {
  const {

    openModal,
    setOpenModal
  } = React.useContext(ShopContext);

  return (
    <React.Fragment>
      <h1>Indatum commerce shopping cart</h1>
      <CreateShopButton
        setOpenModal={setOpenModal}
      />
      <ShopSearch/>
      <ShopList /> 
      <ShopSearchPrice/> 
          {!!openModal && (
            <Modal>
              <ShopForm/>
            </Modal>
          )}
    </React.Fragment>
  );
}

export { AppUI };