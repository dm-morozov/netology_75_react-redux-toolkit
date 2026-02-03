import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store'
import { addTodo, toggleTodo, removeTodo } from '../features/todos/todosSlice'

const Todos: React.FC = () => {
  const [newTodo, setNewTodo] = useState('')
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch<AppDispatch>()

  const handleAdd = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo))
      setNewTodo('')
    }
  }

  return (
    <div>
      <h2>Список задач</h2>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAdd}>Добавить</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Переключить
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
