import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg"; 
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";
import Men from "./Men";
import Women from "./Women";

const user1 = {
  name:"Vijay singh",
  gender:"male",
  age:"19",
}

const user2 = {
  name:"Ladki",
  gender:"female",
  age:"35"
}



function App() {
  
  return (
    <>
     {
      user1.gender =="male" ? <Men/> :<Women/>
     }

     <Women/>

     

     
      
    </>
  );
}

export default App;
