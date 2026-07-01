import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice';

const App = () => {
  const num = useSelector(state=>state.counter.value);
  const theme = useSelector(state =>state.theme.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>{num}</h1><h1>{theme}</h1>
      <button
      onClick={()=>{
        dispatch(increment());
      }}
      >Increment</button>
      <button onClick={()=>{
        dispatch(decrement());
      }}>Decrement</button>

    </div>
  )
}

export default App
