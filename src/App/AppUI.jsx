import React from 'react';
// Importamos nuestro contexto
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { Modal } from '../Modal';


// ELECTIVAS 
import { TodoList } from '../TodoList';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    openModal,
  } = React.useContext(TodoContext);

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
          
      {/* <Scroller></Scroller> */}
    </React.Fragment>
    
  );
}

export { AppUI };