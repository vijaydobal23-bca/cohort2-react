import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";
import Fun from "./components/Fun";

function App() {
  const handleOnclick = (a,b)=>{
    console.log("Handling the ",a,b)
  }
  return (
    <>
      <h1>This is about props and components</h1>
      Hello world form the vijay
      {/* {Card("Vijay")}
      {Card("Sanjay")} */}

      <Card name = "Karan singh"></Card>//components and props
      <Fun handleOnClick = {handleOnclick}></Fun> //passing function as props
    </>
  );
}

export default App;
