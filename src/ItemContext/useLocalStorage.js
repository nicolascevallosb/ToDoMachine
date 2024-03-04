import React from "react";

/* const tasksList = [
  { text: 'Buscar mods para TTYD', completed: false },
  { text: 'Terminar ToDo Machine', completed: false },
  { text: 'Practicar SmUsh', completed: true },
  { text: 'Completar Lands of Torture', completed: true },
  { text: 'Ir al sushi', completed: false },
];

localStorage.setItem('TASKS_V1', JSON.stringify(tasksList));
localStorage.removeItem('TASKS_V1'); */

function useLocalStorage(itemName, initialVal) {

  const [item, setItem] = React.useState(initialVal);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {

        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialVal));
          parsedItem = initialVal;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
  
      } catch (error) {
        setLoading(false);
        setError(true);
      } 
      
    }, 2000);
  }, [itemName, initialVal]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
  
}

export { useLocalStorage };