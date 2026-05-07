import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [title, setTitle] = useState("")
  return <>

  <form action="" onSubmit={(e)=>{
    e.preventDefault();
    setTitle("")
  }}>
    <input type="text" placeholder="enter Name" value = {title} onChange={(e)=>{
        setTitle(e.target.value)
    }}/>

    <button>Submit</button>
  </form>

  </>;
}

export default App;
