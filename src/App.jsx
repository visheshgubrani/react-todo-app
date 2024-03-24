import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTodo = () => {
    setTodoList([...todoList, todo])
    setTodo('')
  }

  const deleteTask = (index) => {
    const newTasks = [...todoList]
    newTasks.splice(index, 1)
    setTodoList(newTasks)
  }


  return (
    <div>
      <div className="addTodo">
        <input type="text" onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={addTodo}>Add Task</button>
      </div>

      <div className="Todos">
        {todoList.map((task, index) => {
          return (
            <div>
            <h2>{task}</h2>
            <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default App
