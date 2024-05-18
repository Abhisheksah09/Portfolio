import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
// import image from "../Images/";

function NavBar() {
  const [nav, setNav] = useState(false);

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.error(`Element with ID ${target} not found.`);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center w-full h-[100px] text-white bg-black  px-4">
        <div>
          {/* <img
            className="w-[10%] border rounded-[50%]  md:mx-[60px] cursor-pointer"
            src=""
            alt="Logo"
          /> */}
          <h1 className="  text-6xl font-allura text-cyan-500 px-8">Abhi</h1>
        </div>

        <ul className="hidden md:flex">
          <li
            className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-cyan-500 duration-200"
            onClick={() => smoothScroll("#home")}
          >
            Home
          </li>
          <li
            className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105  hover:text-cyan-500 duration-200"
            onClick={() => smoothScroll("#about")}
          >
            About
          </li>
          <li
            className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105  hover:text-cyan-500 duration-200"
            onClick={() => smoothScroll("#skills")}
          >
            Skill
          </li>{" "}
          <li
            className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-cyan-500  duration-200"
            onClick={() => smoothScroll("#projects")}
          >
            Projects
          </li>
          <li
            className="px-10 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-cyan-500  duration-200"
            onClick={() => smoothScroll("#contact")}
          >
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
          absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-black to-gray-800
           text-white z"
          >
            <li
              className=" text-4xl cursor-pointer px-4 py-8 "
              onClick={() => {
                setNav(false);
                smoothScroll("#home");
              }}
            >
              Home{" "}
            </li>
            <li
              className=" text-4xl cursor-pointer px-4 py-8 "
              onClick={() => {
                setNav(false);
                smoothScroll("#about");
              }}
            >
              About{" "}
            </li>
            <li
              className=" text-4xl cursor-pointer px-4 py-8 "
              onClick={() => {
                setNav(false);
                smoothScroll("#skills");
              }}
            >
              Skill{" "}
            </li>
            <li
              className=" text-4xl cursor-pointer px-4 py-8 "
              onClick={() => {
                setNav(false);
                smoothScroll("#projects");
              }}
            >
              Projects{" "}
            </li>
            <li
              className=" text-4xl cursor-pointer px-4 py-8 "
              onClick={() => {
                setNav(false);
                smoothScroll("#contact");
              }}
            >
              Contact{" "}
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default NavBar;
