import React from "react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Innobyte Services",
    description:
      "During my three-month internship as a Full Stack Developer, I had the opportunity to immerse myself in various aspects of web development, working both on the front-end and back-end. This internship provided me with invaluable experience and a solid foundation in full stack development. Throughout the internship, I successfully completed all the tasks assigned to me, demonstrating my ability to learn quickly and apply new knowledge effectively. In the final phase of my internship, I was entrusted with a significant project: developing a comprehensive User Management API. This project involved the entire development lifecycle, from initial design and planning to implementation and testing. The API was designed to handle various user-related functionalities, including user registration, authentication, profile management, and role-based access control. By the end of the internship, I had not only completed the User Management API project successfully but also gained a deeper understanding of full stack development. This experience has equipped me with the skills and confidence to tackle complex development challenges and contribute effectively to future projects.",
    duration: "11 February 2024 - 10 April 2024",
  },
];

const Experience = () => {
  return (
    <div className="container  max-lg:bg-black mx-auto text-justify p-8 bg-black">
      <div className="mx-4 sm:mx-[6rem] py-10">
        <h1 className="text-4xl text-white font-bold border-b-4 border-cyan-500 p-2 inline">
          Experience
        </h1>
        <p className="py-6 text-gray-300">Professional Experience</p>
      </div>
      <div className="grid gap-8  w-[80%] m-auto">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
              {experience.role}
            </h2>
            <h3 className="text-lg sm:text-xl mb-4 text-cyan-400">
              {experience.company}
            </h3>
            <p className="mb-4 text-gray-300">{experience.description}</p>
            <p className="text-gray-500">{experience.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
