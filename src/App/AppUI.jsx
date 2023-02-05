import React from 'react';
// Importamos nuestro contexto
import { ShopContext } from '../ShopContext';
import { TodoSearch } from '../TodoSearch';
import { Modal } from '../Modal';


// ELECTIVAS 
import { TodoList } from '../TodoList';
import { TodoForm } from '../TodoForm';
import { CreateShopButton } from '../CreateShopButton';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    openModal,
    setOpenModal
  } = React.useContext(ShopContext);

  return (
  
    <React.Fragment>
           
      <TodoSearch />
      
        {/* RENDER PROPS QUE ENVIAN FUNCION DE LA SIGUIENTE MANERA */}
          
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}            
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
    
          </TodoList>   

          {!!openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
           <CreateShopButton
        setOpenModal={setOpenModal}
      />
      {/* <Scroller></Scroller> */}
    </React.Fragment>
    
  );
}

export { AppUI };