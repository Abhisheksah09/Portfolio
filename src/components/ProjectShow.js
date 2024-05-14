import React from "react";
import StickyScroll from "../components/ui/project-scroll";
import Image from "../Images/image.webp";
import Image1 from "../Images/Brand.png";

const content = [
  {
    title: "E-COMMERCE WEBSITE",
    description:
      "I contributed to developing a dynamic E-commerce website focused on clothing, improving user experience with features like userfriendly product browsing, secure payment gateways, personalized user accounts. Additionally, I implemented an intuitive admin panel for streamlined management of product listings, inventory tracking, and order fulfillment. Leveraging my expertise in React.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose, I optimized the website's performance and enhanced its functionality. ",
    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={Image}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              window.open("https://github.com/your-repo", "_blank")
            }
          >
            View Code
          </button>
        </div>
      </>
    ),
  },
  {
    title: "User Management API",
    description:
      "I have proficiently developed a robust User Management API with comprehensive Authentication and Authorization functionalities, encompassing user registration, login, user profile management, and OTP-based login. Additionally, the API includes email confirmation with OTP upon user signup. Notably, I also designed and implemented an Admin panel, restricting access to authorized personnel for viewing and updating user data. Leveraging my expertise in React.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose, I successfully executed this project, showcasing my adeptness in full-stack web development.",
    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={Image1}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              window.open("https://github.com/your-repo", "_blank")
            }
          >
            View Code
          </button>
        </div>
      </>
    ),
  },
  {
    title: "RESTAURANT WEBSITE",
    description:
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={Image}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              window.open("https://github.com/your-repo", "_blank")
            }
          >
            View Code
          </button>
        </div>
      </>
    ),
  },

  // {
  //   title: "Collaborative Editing",
  //   description:
  //     "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Collaborative Editing
  //     </div>
  //   ),
  // },
  // {
  //   title: "Real time changes",
  //   description:
  //     "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //       Version control
  //     </div>
  //   ),
  // },
  // {
  //   title: "Version control",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //       Version control
  //     </div>
  //   ),
  // },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //       Version control
  //     </div>
  //   ),
  // },
];

function ProjectShow() {
  return (
    <div className="p-10 bg-black">
      <div className="max-w-screen-lg mx-auto pt-10 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h1 className=" text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
            Projects
          </h1>
          <p className="py-6">These are the my works using technologies</p>
        </div>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}

export default ProjectShow;
