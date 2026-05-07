import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Parent from "./parent";
import { myContext } from "./context/MyContext";

function App() {
  const user = { 
    name: "vijay singh ",
    age:"19"
  };

  return (
    <>
      <h1>Hello world</h1>
      <myContext.Provider value = {user}>
        <Parent />
      </myContext.Provider>
    </>
  );
}

export default App;
