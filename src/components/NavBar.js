import React, { useState } from "react";
import image from "../Images/Logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

function NavBar() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-full h-[100px] text-white bg-black  px-4">
        <div>
          <img
            className="w-[10%] border rounded-[50%]  mx-[60px] cursor-pointer"
            src={image}
            alt="Logo"
          />
        </div>

        <ul className="hidden md:flex">
          <li className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-cyan-500 duration-200">
            Home
          </li>
          <li className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105  hover:text-cyan-500 duration-200">
            About
          </li>
          <li className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105  hover:text-cyan-500 duration-200">
            Skill
          </li>{" "}
          <li className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-cyan-500  duration-200">
            Experiences
          </li>
          <li className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-cyan-500  duration-200">
            Contact
          </li>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul
            className="flex flex-col justify-center items-center 
          absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800
           text-white z"
          >
            <li className=" text-4xl cursor-pointer px-4 py-8 ">Home </li>
            <li className=" text-4xl cursor-pointer px-4 py-8 ">About </li>
            <li className=" text-4xl cursor-pointer px-4 py-8 ">Skill </li>
            <li className=" text-4xl cursor-pointer px-4 py-8 ">Experience </li>
            <li className=" text-4xl cursor-pointer px-4 py-8 ">Contact </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default NavBar;
