import React from 'react';
import { GiCrossedSwords } from "react-icons/gi"; // Icono temático
import './CreateTodoButton.css';
import { useMedievalSounds } from '../useMedievalSounds';
import { Modal } from '../App/Modal';
function CreateTodoButton({SetOpenModal,openModal}) {
    const { playSound } = useMedievalSounds();
 

  return (
    <button 
      className="CreateTodoButton"
      onClick={
        (event) =>{
        playSound('click'); // Sonido de metal/sello
         
        console.log(event.target);
        
        
          SetOpenModal(state => !state)
        
         console.log('Debio cambiar el estado de: ', SetOpenModal );
         
      }}
    >
      <GiCrossedSwords />
    </button>
  );
}

export { CreateTodoButton };