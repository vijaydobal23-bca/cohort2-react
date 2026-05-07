import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'
function App() {

  const [userData, setUserData] = useState([]);
  const [idx, setIdx] = useState(1);

  const getData = async()=>{
    console.log("The data is comming ");

    const responce = await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=30`);
    console.log(responce);
    setUserData(responce.data);
    console.log(responce.data);
  }

  useEffect(()=>{
    getData();
  },[idx]);


  let printUserData = 'No user Found ';
  if(userData.length>0){
    printUserData = userData.map((elem , idx)=>{
      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-44'>
        <img className = 'h-full w-full object-cover rounded-3xl overflow-hidden'src={elem.download_url}></img>
      </div>
      <h2>{elem.author}</h2>
        </a>
      </div>;
    })
  }

  return (
    
    <div className='bg-black h-screen p-4 text-white overflow-auto '>
      

      <div className='flex flex-wrap gap-4 justify-center'>
        {
          printUserData
        }
      </div>

      <div className='flex justify-center gap-4 '>
        <button className='bg-amber-400 text-black rounded p-3 cursor-pointer'
        onClick={()=>{
          console.log("prev button clicked");
          if(idx >=1){
            setIdx(idx-1);
            console.log(idx);
          }
          
        }}>Prev</button>
        <button className='bg-amber-400 text-black rounded p-3 cursor-pointer'
        onClick={()=>{
          setIdx(idx+1);
          console.log(idx);
        }}>Next</button>
      </div>
    </div>
    
  )
}

export default App
