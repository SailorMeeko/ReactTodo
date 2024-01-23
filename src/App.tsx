import React, { useState } from 'react'
import { Todo } from "./Todo"
import './App.css'

interface IFormData {
  newTodo: string
}

interface IToDoList {
  myTodoList: string[]
}

function App() {
  const [todoList, setTodoList] = useState<IToDoList>({ myTodoList: [] })
  const [formData, setFormData] = useState<IFormData>({
    newTodo: ''
  });       

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.newTodo !== '') {
      setTodoList( { myTodoList: [...todoList.myTodoList, formData.newTodo] } )
      setFormData( { newTodo: '' })
    }
  }


  return (
    <>
      <h1>My ToDo List</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="newTodo" value={formData.newTodo} onChange={(e) => setFormData({ newTodo: e.target.value })} />
        <button>Add Todo</button>
      </form>
      <ol>
      { todoList.myTodoList.map((todo) => 
        
        <Todo todo={todo} />)
      }
      </ol>
    </>
  )
}

export default App
