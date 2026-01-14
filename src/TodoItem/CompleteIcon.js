import './TodoItem.css';
import { GiQuill } from "react-icons/gi";
import React from 'react';
import { useMedievalSounds } from '../useMedievalSounds';


function CompleteIcon({ completed, onComplete }) {
    const { playSound } = useMedievalSounds();

  const handleComplete = () => {
    if (!completed) playSound('stamp'); // Sonido de impacto al marcar
    onComplete();//ejecucion de la funcion para marcar coo completado el Todo
  };


  return (
    <div className="icon Icon-Check" onClick={handleComplete}>
      <GiQuill 
        /* 'Icon-active' es la que tiene la animación @keyframes stampImpact */
        className={completed ? 'Icon-active' : ''} 
      />
    </div>
  );
}

export {CompleteIcon}