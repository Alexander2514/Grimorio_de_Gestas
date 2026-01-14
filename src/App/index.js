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

// localStorage.setItem('Todos_v1',JSON.stringify(defaultTodos))
//localStorage.removeItem('Todos_v1')

function App() {
  
  const {Item:todos,
    saveItem:SaveTodos,
    loading,
    error
  
  } = useLocalStorage('Todos_v1',defaultTodos);

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
    newTodos[todoIndex].completed=true


    SaveTodos(newTodos);
  }

  const DeleteTodo= (todoText) => {
    //localizacion de elementos en la lista , y copia de los todos en uno nuevo
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

     


    <CreateTodoButton/>
    </React.Fragment>
     
  );
}





export default App;
