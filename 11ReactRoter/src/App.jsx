import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Gender from "./gender";
import Male from "./Male";
import Female from "./Female";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

function App() {
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/gender" element={<Gender />}>
          <Route path="male" element={<Male/>}></Route>
        </Route>


        <Route path="/gender/female" element={<Female/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
      </Routes>

      <button onClick={()=>{
        navigate("/contact")
      }}>Contact</button>
    </>
  );
}

export default App;
