import React from "react";
import html from "../Images/HTML.png";
import css from "../Images/CSS.png";
import javascript from "../Images/JS.png";
import react from "../Images/REACT.png";
import node from "../Images/NODE.png";
import express from "../Images/express.png";
import tailwind from "../Images/Tailwind.png";
import mongodb from "../Images/mongodb.png";
import sql from "../Images/SQL.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascrip",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React.js",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: node,
      title: "Node.js",
      style: "shadow-green-600",
    },
    {
      id: 6,
      src: express,
      title: "Express",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-300",
    },
    {
      id: 7,
      src: mongodb,
      title: "mongoDB",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: sql,
      title: "SQL",
      style: "shadow-blue-500",
    },
  ];
  return (
    <>
      <div
        name="skills"
        className="bg-gradient-to-b from-gray-900 to-black w-full "
      >
        <div className="md:mx-[8rem] md:text-left sm:mx-[6rem] py-6 md:py-10 text-center sm:text-left">
          <h1 className="text-4xl text-white font-bold border-b-4 border-cyan-500 p-2 inline">
            Skills
          </h1>
          <p className="py-4 md:py-6 text-gray-300">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className=" w-full grid grid-cols-2 mx-auto sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">
            {techs.map(({ id, src, title, style }) => {
              return (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 m-auto" />
                  <p className=" mt-4">{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
