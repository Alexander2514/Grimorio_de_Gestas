import React from 'react';
import { GiCrossedSwords } from "react-icons/gi"; // Icono temático
import './CreateTodoButton.css';
import { useMedievalSounds } from '../useMedievalSounds';

function CreateTodoButton(props) {
    const { playSound } = useMedievalSounds();
 

  return (
    <button 
      className="CreateTodoButton"
      onClick={() =>{
        playSound('click'); // Sonido de metal/sello
        props.setOpenModal(prev => !prev);
      }}
    >
      <GiCrossedSwords />
    </button>
  );
}

export { CreateTodoButton };