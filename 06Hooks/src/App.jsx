import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

let arr = [1, 2, 3, 4, 5];

  const [val, setVal] = useState(arr);
  const [count, setCount] = useState(0);
  let [num , setNum] = useState({name:"vijay"});

  useEffect(()=>{
    console.log("Re remdering");
  },[val])

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => {
        console.log(count);
        setCount(prev => prev + 1); // ✅ best practice
        console.log(count); // old value (async)
      }}>
        Click me
      </button>

      {
        val.map((el, idx) => {
          return <h2 key={idx}>{idx + 1} value is = {el}</h2>
        })
      }

      <button onClick={() => {
        
        const newVal = [...val]
        setVal(newVal);

        console.log(val)
      }}>
        Add +2 to each value
      </button>

      <div>
        {
          num.name
        }
        <button onClick={()=>{
          const newNum = {...num}
          newNum.name = prompt("Enter name");
          setNum(newNum);


        }}>Click</button>
      </div>
    </>
  )
}

export default App;