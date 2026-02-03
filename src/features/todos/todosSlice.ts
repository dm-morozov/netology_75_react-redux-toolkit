import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = { todos: [] }

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(), // Простой ID
        text: action.payload,
        completed: false,
      }
      state.todos.push(newTodo) // "Мутация" ок благодаря Immer
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload) // Фильтр
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer
