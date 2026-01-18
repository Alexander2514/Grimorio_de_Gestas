import React from 'react';
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
    <form onSubmit={onSubmit} className="TodoForm-parchment">
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
    </form>
  );
}

export { TodoForm };