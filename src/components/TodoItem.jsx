import React from 'react'
import'../App.css'
const TodoItem = ({element,deleteTask}) => {
  return (
    <>
    <div className="main">
    <div className="card">
      {element.text}
    </div>
    <div className="button">
    <button onClick={()=>deleteTask(element.id)}>Delete</button>
    </div>
    </div>
    </>
  )
}

export default TodoItem