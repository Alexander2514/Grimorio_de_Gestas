import './TodoItem.css';
import { GiSkullCrossedBones } from "react-icons/gi"; 
import React from 'react';



function DeleteIcon({ onDelete }) {
  return (
    <span 
      className="icon Icon-Delete"
      onClick={onDelete} // Ejecuta la función de borrar que viene de TodoItem
    >
      <GiSkullCrossedBones className="Icon-svg" />
    </span>
  );
}

export { DeleteIcon };