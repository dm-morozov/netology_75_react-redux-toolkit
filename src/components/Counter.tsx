import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../store' // Для TS
import {
  increment,
  decrement,
  incrementByAmount,
} from '../features/counter/counterSlice'

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value) // Читаем state
  const dispatch = useDispatch<AppDispatch>() // Диспатчим actions

  return (
    <div>
      <h2>Счётчик: {count}</h2>
      <button onClick={() => dispatch(increment())}> +1 </button>
      <button onClick={() => dispatch(decrement())}> -1 </button>
      <button onClick={() => dispatch(incrementByAmount(5))}> +5 </button>
    </div>
  )
}

export default Counter
