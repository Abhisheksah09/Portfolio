import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import image from "../Images/portfolio.png";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
function LampDemo() {
  const handleDownload = () => {
    const resumeUrl = `${process.env.PUBLIC_URL}/resume/resume.pdf`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          <img
            className=" w-[50%] md:w-[20%] m-auto  pb-[30px]"
            src={image}
            alt="Logo"
          />
          <Typewriter
            options={{
              strings: ["I'm Abhishek Sah", "Jr Full Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className=" text-justify text-lg md:text-lg lg:text-2xl leading-relaxed text-gray-700 mt-7 mx-auto max-w-prose">
            I'm a skilled software developer proficient in JavaScript and
            specialized in frameworks such as React, Node.js, Express.js, and
            MongoDB, I excel at crafting efficient, scalable, and user-friendly
            solutions.Passionate about exploring cutting-edge technologies,
            particularly in web development, I am continuously seeking
            opportunities to expand my skills and contribute to innovative
            projects.
          </p>
          <button
            onClick={handleDownload}
            className="bg-cyan-500 hover:bg-cyan-700 text-white mt-10 py-1 px-2 text-2xl rounded-sm"
          >
            Download Resume
          </button>

          <div className="flex justify-center items-center mt-10 px-10">
            <a
              href="https://www.linkedin.com/in/abhishek-sah-782409265/"
              target="_blank"
              className="mx-2"
            >
              <FaLinkedin className="text-white text-4xl " />
            </a>
            <a
              href="https://github.com/Abhisheksah09/"
              target="_blank"
              className="mx-2"
            >
              <FaGithub className="text-white text-4xl" />
            </a>
            <a href="mailto:sahabhishek097@gmail.com" className="mx-2">
              <BiLogoGmail className="text-white text-4xl" />
            </a>
          </div>
        </motion.h1>
      </LampContainer>
    </>
  );
}

export default LampDemo;
