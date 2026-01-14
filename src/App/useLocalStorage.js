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
  },3000)

}, [ItemName,initial_item])
  
  
  
  
  const saveItem=  (newItem) =>{
    localStorage.setItem(ItemName,JSON.stringify(newItem))
    setItem(newItem)
  }
  return{Item,
    saveItem,
    loading,
    error
  }
  

}

export{useLocalStorage}