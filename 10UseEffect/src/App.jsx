import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setcount] = useState(0)
useEffect(()=>{
  console.log("Use effect is running")
},[count])


  return (
    <>
   
<h1>{count}</h1>
<button onClick={()=>{
  setcount(count +1);
}}>Click me</button>

    </>
  )
}

export default App
