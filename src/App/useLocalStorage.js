import React from "react";


function useLocalStorage(ItemName,initial_item){

  const [Item,setItem]= React.useState(initial_item)
  const [loading,setLoading]= React.useState(true) 
  const [error,setError]= React.useState(false)

React.useEffect(()=>{

  setTimeout(() => {
    try{
    const localStorageItem = localStorage.getItem(ItemName)
  let parsedItem;

  if (!localStorageItem){
    localStorage.setItem(ItemName, JSON.stringify(initial_item))
    parsedItem=initial_item;
  }
  else {
    parsedItem= JSON.parse(localStorageItem)
    setItem(parsedItem)
  }

  setLoading(false);
  }
  catch(error){
    setLoading(false);
    setError(true)
}
  },4000)

}, [ItemName,initial_item])//Este array le indica a React: "Solo vuelve a ejecutar todo el código dentro del useEffect si el valor de itemName o de initial_item cambia". Si estos valores se mantienen iguales entre un renderizado y otro, React se saltará el efecto para ahorrar energía y evitar procesos repetitivos.
  
  
  
  
  const saveItem=  (newItem) =>{
    localStorage.setItem(ItemName,JSON.stringify(newItem))
    setItem(newItem)

    //mandar la informacion del nuevo item al navegador y a nuesro array
  }
  return{Item,
    saveItem,
    loading,
    error
    //siempre hay que retornar los elementos en un objeto para desctructurarlos en otro script
  }
  

}

export{useLocalStorage}