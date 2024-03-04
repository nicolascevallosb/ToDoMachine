import React from 'react';
import { AppUI } from './AppUI';
import { ItemProvider } from '../ItemContext';

function App() {

  return(
    <ItemProvider>
      <AppUI />
    </ItemProvider>
  );

}

export default App;
