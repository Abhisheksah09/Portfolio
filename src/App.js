import React from "react";
import NavBar from "./components/NavBar";
import LampDemo from "./components/blueLamp";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import StickyScrollRevealDemo from "./components/ProjectShow";
const App = () => {
  return (
    <>
      <div className="">
        <NavBar />
      </div>
      <LampDemo />
      <Skills />
      <StickyScrollRevealDemo />
    </>
  );
};

export default App;
