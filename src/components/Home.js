import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import bgImage from "../Images/Rkbg-image.jpeg"; // Update this path to your background image
import leftImage from "../Images/RKhero-image.png"; // Update this path to your left-side image

const Homepage = () => {
  const handleDownload = () => {
    // Your download resume logic here
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src={leftImage}
              alt="Left Side"
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div> */}
          <div className="md:w-1/2 text-white text-center md:text-left">
            <div className="text-4xl md:text-6xl font-medium tracking-tight text-white">
              <Typewriter
                options={{
                  strings: [
                    "Rushabh Karangutkar",
                    "Music Production",
                    "Film score composer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-justify text-base sm:text-lg lg:text-xl leading-relaxed text-white mt-[4rem] mx-auto max-w-prose">
              Versatile music creator with successful collaborations with top
              media houses like Zee, Colors, Sony, and Planet Marathi, crafting
              music that resonates with diverse audiences
            </p>
            <button
              onClick={handleDownload}
              className="bg-[#d90a2c] hover:bg-[#d90a2c] text-white mt-10 py-2 px-4 text-lg md:text-xl rounded-sm"
            >
              Download Resume
            </button>
            <div className="flex justify-center md:justify-start items-center mt-10 space-x-4">
              <a
                href="https://www.linkedin.com/in/abhishek-sah-782409265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-500"
              >
                <FaLinkedin className="text-3xl md:text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-sah-782409265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-500"
              >
                <MdEmail className="text-3xl md:text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-sah-782409265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-500"
              >
                <FaPhoneSquareAlt className="text-3xl md:text-4xl" />
              </a>
              {/* <a
                href="https://github.com/Abhisheksah09/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-500"
              >
                <FaGithub className="text-3xl md:text-4xl" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
