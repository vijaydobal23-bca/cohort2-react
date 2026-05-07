import React, { useRef, useState, useEffect } from 'react'

const App = () => {
  const [a, seta] = useState(10)
  const count = useRef(0)
  let count2 = 0;
  let ParaRef = useRef()

  useEffect(() => {
    console.log("Component Re-rendered");
    console.log(ParaRef.current);
    
  })

  return (
    <div>
      <h2>State: {a}</h2>
      <p ref={ParaRef}>Dom Para</p>
      <button onClick={() => {
        count.current++
        count2++

        console.log("Ref:", count.current)
        console.log("Normal:", count2)

        seta(a + 1)
      }}>
        Click
      </button>
    </div>
  )
}

export default App