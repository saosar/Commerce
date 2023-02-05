import React from 'react';
import { ShopProvider } from '../ShopContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <ShopProvider>
      <AppUI />
    </ShopProvider>
  );
}

export default App;

// ESTE .js SE CONECTA DIRECTAMENTE CON EL index.js principal del proyecto