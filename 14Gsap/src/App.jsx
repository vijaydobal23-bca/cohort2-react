import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function App() {
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".div2",
        markers:true,
        scrub:true,

      }
    })

    tl.to(".div2 div",{
      rotate:360,
      duration:2,
      delay:2,
      borderRadius:"50%",
      y:1000,
      transform:"translateX(100%)"
      
    })
    
  })

  return (
    <>
      <div style={{backgroundColor:"red" , height:"100vh",width:"100vw"}}>
    </div>

    <div style={{backgroundColor:"green" , height:"100vh",width:"100vw",display:"flex",justifyContent:"center" , alignItems:"center"}} className='div2'>
      <div style={{backgroundColor:"blue" , height:"50vh",width:"30vw" }}>
    </div>
    </div>

    <div style={{backgroundColor:"yellow" , height:"100vh",width:"100vw"}}>
    </div>
    </>

    
  )
}

export default App
