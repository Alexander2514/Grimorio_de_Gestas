import './TodoSearch.css';
import React from 'react'

function TodoSearch({
  SearchValue,
  setSearchValue
}) {
  
  

  return(
    <input 
      placeholder="Buscar TODO"
      className="TodoSearch"
      value= {SearchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        
        // console.log("search: ",event.target.value);
        
      }}
    />
  )
}

export {TodoSearch}