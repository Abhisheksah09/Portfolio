import React from "react";
import NavBar from "./components/NavBar";
import LampDemo from "./components/blueLamp";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
const App = () => {
  return (
    <>
      <div className="">
        <NavBar />
      </div>
      <LampDemo />
      {/* <Routes>
        <Route path="/" element={<LampDemo />} />
      </Routes> */}
      <About />
    </>
  );
};

export default App;
