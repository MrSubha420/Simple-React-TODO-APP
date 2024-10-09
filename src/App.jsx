import React, {  useState } from 'react'
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import TodoFrom from './components/TodoFrom';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import'./App.css';
const App = () => {
  const [todo,setTodo] = useState([]);
  //getting stored todos from local storages 
  useEffect (()=> {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodo(storedTodos);
  },[]);

  // Add Tast Functionlity
  const addTask=(text)=>{
    const newTask={
      id: Date.now(),
      text,
    };
    setTodo(todo.unshift(newTask))
    localStorage.setItem("todos",JSON.stringify(todo));
    toast.success("New Task Added");
    setTodo(JSON.parse(localStorage.getItem("todos")));
  };

  // Delete Task functionlity
  const deleteTask=(id)=>{
    const updatedTodos = todo.filter(item => item.id !=id)
    localStorage.setItem("todos",JSON.stringify(updatedTodos));
    toast.success("This Task deleted.");
    setTodo(updatedTodos);
  };
  return (
    <>
    <Navbar/>
    <TodoFrom addTask={addTask}/>
    <TodoList todo={todo} deleteTask={deleteTask}/>
    <ToastContainer position='top-right' theme='dark'/>
    </>
  )
}

export default App;