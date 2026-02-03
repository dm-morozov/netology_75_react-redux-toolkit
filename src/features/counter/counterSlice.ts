import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  // Тип состояния (для TS)
  value: number
}

const initialState: CounterState = { value: 0 } // Начальное состояние

export const counterSlice = createSlice({
  name: 'counter', // Имя slice (для dev-tools)
  initialState,
  reducers: {
    // Объект с редукторами
    increment: (state) => {
      state.value += 1 // Благодаря Immer, можно "мутировать"!
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // С payload
      state.value += action.payload
    },
  },
})

// Автоматически генерируем actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Экспортируем reducer
export default counterSlice.reducer
