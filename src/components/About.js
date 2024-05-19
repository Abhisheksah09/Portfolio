import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-screen-xl">
          <div className="md:mx-[7rem]  sm:mx-[6rem] py-6 md:py-10 text-center sm:text-left">
            <h1 className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
              About
            </h1>
            <p className="py-6 text-white">
              Transforming ideas into digital realities with creativity and
              code.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-6 md:px-10 lg:px-[0rem">
            <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800 hover:bg-gray-700 transform hover:-translate-y-1 hover:scale-105">
              <p className="text-lg mb-4 md:text-xl lg:text-lg">
                As a dedicated Junior Full Stack Developer, I specialize in
                crafting flawless web solutions with JavaScript, React.js, and
                Redux for captivating front-end experiences. With expertise in
                Express, I build robust back-end applications and seamlessly
                integrate external services through APIs. I'm skilled in MongoDB
                and SQL for efficient data management and prioritize security
                with ironclad authentication measures. With exceptional
                interpersonal skills and proactive problem-solving abilities, I
                bring a dynamic edge to any team, committed to excellence and
                collaboration.
              </p>
              <p className="text-lg mb-4 md:text-xl lg:text-lg">
                I specialize in JavaScript, React, Node.js, Express.js, mongoDB,
                SQL, Tailwind CSS, HTML, CSS. In my free time, I enjoy playing
                multiple sports such as Football, Volleyball, Cricket, and also
                learning new programming languages.
              </p>
              <p className="text-lg md:text-xl lg:text-lg">
                I'm always excited to work on new projects and collaborate with
                others. Feel free to reach out to me!
              </p>
            </div>

            <div className="text-center md:text-left px-10">
              <h1 className="text-3xl font-bold mb-4 ">Education</h1>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">
                  Bachelor of Information Technology (BSc.IT)
                </h2>
                <p className="text-lg">
                  Guru Nanak Khalsa College of Arts, Science & Commerce
                </p>
                <p>2019 - 2023</p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">
                  Higher Secondary Certificate (HSC)
                </h2>
                <p className="text-lg">
                  Guru Nanak Khalsa College of Arts, Science & Commerce
                </p>
                <p>2017 - 2019</p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">
                  Secondary School Certificate (SSC)
                </h2>
                <p className="text-lg">Our lady of good counsel high school </p>
                <p>Passed in 2017</p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">Certifications</h2>
                <p className="text-lg">Full-Stack JavaScript Web Development</p>
                <p> - RST Forum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
