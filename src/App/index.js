import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import React from 'react';//revision
import { useLocalStorage } from './useLocalStorage';
import { defaultTodos } from './defaultTodos';
import {TodoLoading} from '../TodoLoading'
import {TodoError} from '../TodoError'
import {EmptyTodo} from '../EmptyTodo'
import { Modal } from './Modal';
import { TodoForm } from '../TodoForm';


// localStorage.setItem('Todos_v1',JSON.stringify(defaultTodos))
//localStorage.removeItem('Todos_v1')

function App() {
  
  const {Item:todos,
    saveItem:SaveTodos,
    loading,
    error
  
  } = useLocalStorage('Todos_v1',defaultTodos);

  const [openModal,SetOpenModal] =  React.useState(false)
  
const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    SaveTodos(newTodos);
  };





  const [SearchValue, setSearchValue] = React.useState('');
  console.log('User: ',SearchValue);

  const completedTodos= todos.filter(todos => (!!todos.completed)).length;
  const totalTodos= todos.length;

  const searchedtodos = todos.filter((Todo) => {
    return Todo.text.toLowerCase().includes(SearchValue.toLowerCase())
  })


  const CompleteTodo= (todoText) => {
    const newTodos= [...todos];
    const todoIndex= newTodos.findIndex((todo) => todo.text === todoText);
    // En lugar de forzarlo a true, lo invertimos
  // Si es true, pasa a false. Si es false, pasa a true.
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed;


    SaveTodos(newTodos);
  }

  const DeleteTodo= (todoText) => {
    //localizacion de elementos en la lista , y copia de los Todos en uno nuevo
    const newTodos= [...todos];
    const todoIndex= newTodos.findIndex((todo) => todo.text === todoText);

    //eliminacion del todo en la lista 
    newTodos.splice(todoIndex,1);
    //marcando estado actual de nuestro componente que seria la nueva lista
    SaveTodos(newTodos);
  }



  return (
    <React.Fragment>

      <TodoCounter 
  totalTodos={totalTodos} 
  completedTodos={completedTodos} 
  loading={loading} 
  error={error} 
/>
      
      <TodoSearch
        value= {SearchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {loading && !error &&<TodoLoading/>}
        {error && <TodoError/>}
        {(!loading && searchedtodos.length === 0 && !error) && <EmptyTodo/>}

      
      {!loading && !error && searchedtodos.map((todo) => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
        // forma de pasarle una funcion a un componente sin ejecutarla
        onComplete={() => CompleteTodo(todo.text)}
        onDelete={() => DeleteTodo(todo.text)}
        />
      ))}

   </TodoList>

     


    <CreateTodoButton
    // openModal= {openModal}
    SetOpenModal = {SetOpenModal}
    />

     {openModal && (
      <Modal>
        <TodoForm
        addTodo={addTodo}
        SetOpenModal={SetOpenModal}
        />
      </Modal>
     )}


    </React.Fragment>
     
  );
}





export default App;
