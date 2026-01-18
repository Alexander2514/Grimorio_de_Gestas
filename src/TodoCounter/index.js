import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading, error }) {
  if (loading) return null;

  const getMessage = () => {
    if (error) return "¡La Oscuridad corrompe los registros!";
    if (totalTodos === 0) return "Tu Estandarte espera ser alzado...";
    return `Has cumplido ${completedTodos} de ${totalTodos} Misiones`;
  };

  return (
    <h2 className={`TodoCounter ${totalTodos === 0 ? 'Empty' : ''}`}>
      {getMessage()}
    </h2>
  );
}

export { TodoCounter };