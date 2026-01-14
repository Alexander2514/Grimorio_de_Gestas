import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import React from 'react'
import { useMedievalSounds } from '../useMedievalSounds';
import './TodoItem.css';

function TodoItem(props) {
  const [isDeleting, setIsDeleting] = React.useState(false);

 const { playSound } = useMedievalSounds();
  //mover a DeleteIcon
  const onDeleteAnimation = () => {
    playSound('scroll'); // Sonido de papel enrollándose
    setIsDeleting(true); 
    setTimeout(() => {
      props.onDelete();
    }, 900); // Sincronizado con ultraRealisticRoll
  };
  

  return (
    <li className={`TodoItem ${isDeleting ? 'TodoItem--deleting' : ''}`}>
      <CompleteIcon 
        completed={props.completed} 
        onComplete={props.onComplete} 
      />
      
      <p className={`TodoItem-p ${props.completed && 'TodoItem-Complete'}`}>
        {props.text}
      </p>

      <DeleteIcon onDelete={onDeleteAnimation} />
    </li>
  );
}
export{ TodoItem}