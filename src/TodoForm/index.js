import React from 'react';
import { motion } from 'framer-motion'; // Agregamos la animación suave
import './TodoForm.css';

function TodoForm({ addTodo, SetOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    //capturando el valor del prompt
  };

  const onCancel = () => {
    SetOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim().length > 0) {//eliminar espacios en blanco para hacer precisa la validacion
      addTodo(newTodoValue);//mandar el nuevo valor a la funcion de anadir en app/index.js
      SetOpenModal(false);
    }
  };

  return (
    <motion.form 
      initial={{ scale: 0.8, opacity: 0 }} // Inicia pequeño y transparente
      animate={{ scale: 1, opacity: 1 }}   // Aparece con un efecto suave
      transition={{ type: "spring", stiffness: 100 }}
      onSubmit={onSubmit} 
      className="TodoForm-parchment"
    >
      {/* Decoración superior para mejor ambiente medieval */}
      <div className="TodoForm-decoration">⚜️</div>

      <label className="TodoForm-label">Inscribir Nueva Gesta</label>
      
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Ej: Recuperar el cáliz sagrado..."
        className="TodoForm-textarea"
        required
      />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Abandonar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Sellar Gesta
        </button>
      </div>

      {/* Decoración inferior */}
      <div className="TodoForm-decoration" style={{ marginTop: '15px' }}>⚜️</div>
    </motion.form>
  );
}
export { TodoForm };