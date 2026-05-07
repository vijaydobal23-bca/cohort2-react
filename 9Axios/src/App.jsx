import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
const [allData, setallData] = useState([])

const getData = async ()=>{
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(response)
  setallData(response.data)
}
  return (
    <>
   

    <div>
      {allData.map((el,idx)=>{
        return <h1 key={idx}>{el.name} , {idx+1}</h1>
      })}
    </div>

     <button onClick={()=> getData()}>click</button>

    </>
  )
}

export default App
