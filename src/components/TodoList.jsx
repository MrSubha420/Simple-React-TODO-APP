import React from 'react'
import TodoItem from './TodoItem'
import'../App.css'

const TodoList = ({todo,deleteTask}) => {
  return (
    <>
    <section className="todo-list">
    <h1>Todos</h1>
    <div className="container">
   {
      todo && todo.length > 0 ? todo.map(element => {
         return(
            <TodoItem element={element} deleteTask={deleteTask} key={element.id}/>
         )
      }) : <p>you have no task.</p>
   }
    </div>
    </section>
    </>
  )
}

export default TodoList