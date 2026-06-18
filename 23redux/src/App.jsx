import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { store } from './reduxx/store'
import { useDispatch, useSelector } from 'react-redux';
import { decriment, increment } from './reduxx/slices/counterSlice'

function App() {
  const [count, setCount] = useState(0);
  const num = useSelector((state)=>state.counter.value);
  const theme = useSelector((state)=>state.theme.value);
  const dispach = useDispatch();

 
  return (
    <>
    <div>
      <h1>{theme} , {num}</h1>
      <button onClick={()=>{
        dispach(increment())
      }}>increment</button>
      <button onClick={()=>{
        dispach(decriment());
      }}>decrement</button>
    </div>
    </>
  )
}

export default App
