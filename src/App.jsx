import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  
  return (
    <div>
      <div className="addTodo">
        <input type="text" onChange={(e) => setTodo(e.target.value)}/>
        <button>Add Task</button>
      </div>

      <div className="Todos">{todo}</div>
    </div>
  )
}

export default App
